/* eslint-disable @typescript-eslint/naming-convention */

import * as vscode from "vscode";
import fs = require("fs");
import https = require("https");
import {
	downloadFile,
	findFileMatchSync,
	selectFolder,
	unzipAsync,
} from "../utils/FileUtils";
import * as axios from "axios";
import * as open from "open";
import { ConfigScope, Sections } from "../data/ConfigScope";
import { createIterator } from "../utils/ExtraUtil";
import { globalState } from "../extension";
/**
 * 补全库配置类
 * @description 主要使用异步+Promise
 * @todo TODO: i18n高优先级
 */
export class LibraryHandler {
	private output: vscode.OutputChannel;
	private libraryPath: String;
	private libs: Array<LibraryInfo> = [];
	constructor() {
		this.output = vscode.window.createOutputChannel("LLSE-AIDS");
		this.libraryPath = ConfigScope.setting().get(
			Sections.libraryPath
		) as String;
	}
	public start() {
		const repo = "https://github.com/LiteLScript-Dev/HelperLib/raw/master/";
		console.log("start");
		this.output.show();
		this.log("Repo: " + repo);
		const run = () => {
			this.pullManifest(repo)
				.then((d) => {
					this.log("开始拉取清单");
					this.log("获取到清单内容");
					this.log(JSON.stringify(d)); // DEBUG:
					handleManifest(d as SourceInfo);
				})
				.catch((reason) => this.log(reason));
			const handleManifest = (d: SourceInfo) => {
				this.selectVersion(d)
					.then((items) => handleSetup(items))
					.catch((reason) => {
						this.log("出现错误 原因: " + reason, "ERROR");
						this.cancel(20);
					});
			};
			const handleSetup = (items: LibraryInfo[]) => {
				let it = createIterator(items);
				const func = () => {
					let now = it.next();
					if (now.done === true) {
						this.log("安装已完成 共计" + now.length + "个包");
					} else {
						this.setup(now.value)
							.then(() => func())
							.catch((reason) => {});
					}
				};
				func();
			};
		};
		// check local path config
		this.config()
			.then(() => run())
			.catch(() => this.cancel(5));
	}

	private setup(it: LibraryInfo): Promise<unknown> {
		const tag = it.name + "(" + it.language + ")";
		return new Promise<unknown>((resolve, reject) => {
			this.logTag("准备拉取库文件 " + it.download_url, tag);
			let savePath = this.libraryPath + "/" + it.type;
			try {
				fs.mkdirSync(savePath);
			} catch (_) {}
			downloadFile(it.download_url, savePath)
				.then((path) => {
					this.logTag("库成文件已保存至 " + path, tag);
					unzipArchive(path);
				})
				.catch((reason) => {
					reject();
					this.logTag("拉取库时出现错误" + reason, tag, "ERROR");
				});
			//this.log("准备安装库" + tag);
			const unzipArchive = (path: string) => {
				this.logTag("开始解压库文件", tag);
				unzipAsync(path, savePath)
					.then((count) => {
						this.logTag("解压完成,共解压了" + count + "个文件", tag);
						fs.unlinkSync(path);
						setting(savePath);
					})
					.catch((reason) => {
						reject();
						this.logTag("解压库文件时出现错误" + reason, tag, "ERROR");
					});
			};
			const setting = (path: string) => {
				//TODO: 更多语言支持
				switch (it.type) {
					case "dts":
						let index = findFileMatchSync(path, it.index);
						if (index === null) {
							reject();
							this.logTag("找不到库提供的索引文件", tag, "ERROR");
						} else {
							this.logTag("找到库索引文件 " + index, tag);
							it.recent_index = index;
							ConfigScope.library()
								.save(it)
								.then(() => {
									resolve(null);
								});
						}
						break;
					default:
						this.logTag("非预设类型 " + it.type, tag, "ERROR");
						break;
				}
			};
		});
	}
	private selectVersion(libInfo: SourceInfo): Promise<LibraryInfo[]> {
		let p = new Promise<LibraryInfo[]>((resolve, reject) => {
			const quickPick = vscode.window.createQuickPick();
			quickPick.title = libInfo.name;
			let quickItems: Array<vscode.QuickPickItem> = [];
			libInfo.library.forEach((i) => {
				quickItems.push({
					label: i.name,
					description: "version: " + i.version + " index: " + i.index,
					detail: "Language: " + i.language,
				});
			});
			// Title Bar Buttom
			quickPick.buttons = [
				{
					iconPath: new vscode.ThemeIcon("github-inverted"),
					tooltip: "View Source",
				},
				{
					iconPath: new vscode.ThemeIcon("warning"),
					tooltip: "What's this?",
				},
				{
					iconPath: new vscode.ThemeIcon("close"),
					tooltip: "Bye~",
				},
			];
			quickPick.onDidChangeSelection((e) => {
				//TODO: 只能选择一种语言类型
			});
			quickPick.onDidTriggerButton((e) => {
				switch ((e.iconPath as vscode.ThemeIcon).id) {
					case "warning":
						open("https://github.com/LiteLScript-Dev/LiteLoaderSE-Aids/wiki");
						break;
					case "github-inverted":
						open(libInfo.source);
						break;
					case "close":
						quickPick.hide();
						quickPick.dispose();
						break;
					default:
						break;
				}
			});
			quickPick.items = quickItems;
			quickPick.busy = true;
			quickPick.ignoreFocusOut = true;
			quickPick.canSelectMany = true;
			quickPick.matchOnDescription = true;
			quickPick.matchOnDetail = true;
			quickPick.onDidAccept((e) => {
				if (quickPick.selectedItems.length === 0) {
					quickPick.dispose();
					quickPick.hide();
					reject("NOTHING SELECTED");
					return;
				}
				let cache: LibraryInfo[] = [];
				libInfo.library.forEach((item) => {
					quickPick.selectedItems.forEach((sitem) => {
						if (
							sitem.label === item.name &&
							sitem.detail?.includes(item.language) &&
							sitem.description?.includes(item.version)
						) {
							cache.push(item);
						}
					});
				});
				resolve(cache);
				quickPick.hide();
				quickPick.dispose();
			});
			quickPick.onDidHide((e) => {
				reject("SELECTED CANCEL");
			});
			quickPick.show();
		});
		return p;
	}
	public pullManifest(repoUrl: String): Promise<unknown> {
		return new Promise((resolve, reject) => {
			if (!repoUrl.startsWith("http://") && !repoUrl.startsWith("https://")) {
				reject("清单地址不合法!");
			}
			const manifestUrl = repoUrl + "/manifest_test.json";
			axios.default
				.get(manifestUrl)
				.then(function (response) {
					if (response.status === 200) {
						resolve(response.data);
					} else {
						reject("请求清单出现错误 状态码" + response.status);
					}
				})
				.catch(function (error) {
					reject(error);
					console.log(error);
				});
		});
	}
	public config(): Promise<unknown> {
		return new Promise<unknown>((resolve, reject) => {
			if (
				this.libraryPath === undefined ||
				this.libraryPath === null ||
				this.libraryPath === "" ||
				!fs.existsSync(this.libraryPath.toString())
			) {
				this.log("未配置库存放路径", "WARNING");
				const func = () => {
					selectFolder("选择库存放目录")
						.then((path) => {
							this.log("库将保存至 " + path);
							ConfigScope.setting()
								.update(Sections.libraryPath, path, true)
								.then((_) => {
									// success
									this.libraryPath = path;
									resolve(null);
								});
						})
						.catch((e) => {
							this.log("未选择任何有效目录", "ERROR");
							vscode.window
								.showWarningMessage("未选择任何有效目录", "重新选择", "取消")
								.then((e) => {
									if (e === "重新选择") {
										func();
									} else {
										reject();
									}
								});
						});
				};
				func();
			} else {
				// success
				resolve(null);
			}
		});
	}
	private cancel(s: number) {
		this.log("配置操作取消,此窗口将在" + s + "s后关闭", "WARNING");
		this.log("您可在稍后重新进行配置", "WARNING");
		setTimeout(() => {
			this.output.hide();
			this.output.dispose();
		}, s * 1000);
	}
	private log(msg: any, type: "INFO" | "ERROR" | "WARNING" = "INFO") {
		const time = new Date().toLocaleTimeString();
		if (msg.toString().includes("Error:")) {
			this.output.appendLine("[" + time + "] ERROR " + msg);
			return;
		}
		this.output.appendLine("[" + time + "] " + type + " " + msg);
	}
	private logTag(
		msg: any,
		tag: string,
		type: "INFO" | "ERROR" | "WARNING" = "INFO"
	) {
		this.log("[" + tag + "] " + msg, type);
	}
}
