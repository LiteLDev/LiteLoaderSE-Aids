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
import { ConfigPanel } from "../panels/ConfigPanel";
import {
	getPythonInterpreterPath,
	runCommandWithResult,
} from "../utils/SomeUtil";
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
	startLocal() {
		//TODO startLocal
		throw new Error("Method not implemented.");
	}
	public start(repo: string) {
		// 兼容方案
		if (repo.includes("/manifest.json")) {
			repo = repo.replace("/manifest.json", "");
		}
		ConfigScope.setting().update("sourceUrl", repo);
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
					.then((items) => handleSetup(items,d))
					.catch((reason) => {
						this.log("出现错误 原因: " + reason, "ERROR");
						this.cancel(20);
					});
			};
			const handleSetup = (items: LibraryInfo[],source:SourceInfo) => {
				let it = createIterator(items);
				const func = () => {
					let now = it.next();
					if (now.done === true) {
						this.log("安装已完成 共计" + now.length + "个包");
						this.log("该窗口将在6s后自动关闭");
						vscode.window.showInformationMessage("补全库具体使用方法详见wiki","访问").then(item=>{
							if(item ==="访问"){
								open(source.wiki);
							}
						});
						setTimeout(() => {
							this.output.hide();
							this.output.dispose();
						}, 6 * 1000);
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
	private dtsSetup(it: LibraryInfo): Promise<unknown> {
		const tag = it.name + "(" + it.language + ")";
		return new Promise<unknown>((resolve, reject) => {
			let savePath = this.libraryPath + "/" + it.type;
			this.logTag("准备拉取库文件 " + it.download_url, tag);
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
					this.logTag("拉取库时出现错误\n" + reason, tag, "ERROR");
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
			};
		});
	}
	private pySetup(it: LibraryInfo): Promise<unknown> {
		const tag = it.name + "(" + it.language + ")";
		return new Promise<unknown>((resolve, reject) => {
			this.logTag(it.tip, tag);
			getPythonInterpreterPath()
				.then((s) => {
					console.log(s);
					if (s === undefined) {
						this.logTag(`获取当前Python环境路径时返回undefined`, tag, "ERROR");
						reject();
					} else {
						runCommandWithResult(
							s +
								" -c \\\"import platform; print(platform.python_version(),end='')\\\"",
							(stdout: string, stderr: any) => {
								if (stderr !== null) {
									this.logTag(`执行安装命令时出现错误 \n ${stderr}`, tag, "ERROR");
									this.logTag(`Python环境异常`, tag, "ERROR");
									reject();
								} else {
									if (parseFloat(stdout) >= 3.1) {
										this.logTag(`当前Python版本 ${stdout}`, tag, "INFO");
										install(s);
									} else {
										this.logTag(
											`Python版本${stdout}不符合最低要求(>=3.10) 请更换当前venv或conda环境`, tag,
											"ERROR"
										);
									}
								}
							}
						);
					}
				})
				.catch((e) => {
					this.logTag(`获取当前Python环境路径时出现错误 \n ${e}`, tag, "ERROR");
					reject(e);
				});

			let install = (path: string) => {
				let p = it.cmd.replace("{python}", path as string);
				this.logTag(`正在执行安装命令${p}`, tag, "INFO");
				runCommandWithResult(p, (stdout: string, stderr: any) => {
					if (stderr !== null) {
						this.logTag(`执行安装命令时出现错误 \n ${stderr}`, tag, "ERROR");
						reject();
					} else {
						this.logTag(`${stdout}`, tag, "INFO");
						if (
							stdout.includes("already satisfied") ||
							stdout.includes("Successfully installed")
						) {
							this.logTag(`安装Python库成功`, tag, "INFO");
							resolve(null);
						}
					}
				});
			};
		});
	}

	private setup(it: LibraryInfo): Promise<unknown> {
		const tag = it.name + "(" + it.language + ")";
		this.log("正在安装库 " + it.type, "INFO");
		//TODO: 更多语言支持
		switch (it.type) {
			case "dts":
				return this.dtsSetup(it);
			case "py":
				return this.pySetup(it);
			default:
				this.logTag("非预设类型 " + it.type, tag, "ERROR");
				return new Promise<unknown>((resolve, reject) => {
					reject();
				});
		}
	}

	private selectVersion(libInfo: SourceInfo): Promise<LibraryInfo[]> {
		let p = new Promise<LibraryInfo[]>((resolve, reject) => {
			const quickPick = vscode.window.createQuickPick();
			quickPick.title = libInfo.name;
			let quickItems: Array<vscode.QuickPickItem> = [];
			libInfo.library.forEach((i) => {
				quickItems.push({
					label: i.name,
					description:
						"version: " + i.version + " index: " + i.index + " type: " + i.type,
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
			const manifestUrl = repoUrl + "/manifest_real.json";
			axios.default
				.get(manifestUrl)
				.then(function (response) {
					if (response.status === 200) {
						resolve(response.data);
					} else {
						reject("请求清单出现错误 状态码" + response.status);
					}
				})
				.catch((error) => {
					this.log("请求清单出现错误, 建议更换源重试");
					reject(error);
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
									ConfigPanel._updateLibraryPath(path);
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
