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
						this.cancel();
					});
			};
			const handleSetup = (items: LibraryInfo[]) => {
				var wait = false;
				var i = 0;
				const func = () => {
					while (!wait && i <= items.length) {
						i++;
						wait = true;
						this.setup(items[i]).then(() => {
							wait = false;
							func();
						});
					}
				};
				func();
			};
		};
		// check local path config
		this.config()
			.then(() => run())
			.catch(() => this.cancel());
	}
	private setup(it: LibraryInfo): Promise<unknown> {
		return new Promise<unknown>((resolve, reject) => {
			this.logTag("准备拉取库文件 " + it.download_url, it.name);
			let savePath = this.libraryPath + "/" + it.type;
			try {
				fs.mkdirSync(savePath);
			} catch (_) {}
			downloadFile(it.download_url, savePath)
				.then((path) => {
					this.logTag("库成文件已保存至 " + path, it.name);
					unzipArchive(path);
				})
				.catch((reason) => {
					this.logTag("拉取库时出现错误" + reason, it.name, "ERROR");
				});
			//this.log("准备安装库" + it.name);
			const unzipArchive = (path: string) => {
				this.logTag("开始解压库文件", it.name);
				unzipAsync(path, savePath)
					.then((count) => {
						this.logTag("解压完成,共解压了" + count + "个文件", it.name);
						fs.unlinkSync(path);
						resolve(null);
					})
					.catch((reason) => {
						this.logTag("解压库文件时出现错误" + reason, it.name, "ERROR");
					});
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
					picked: true,
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
	// public setup(archive_path: String, language: String) {
	// 	this.output.appendLine("开始安装" + language + "库文件");
	// 	let p = new Promise((resolve, reject) => {
	// 		unzipAsync(archive_path, LibraryHandler.libraryPath + "/JS");
	// 	});
	// }
	// public static getLibrary(libraryUrl: String) {
	// 	// 链接合法性检查
	// 	if (
	// 		!isNotEmpty(libraryUrl) ||
	// 		(!libraryUrl.startsWith("http://") && !libraryUrl.startsWith("https://"))
	// 	) {
	// 		vscode.window.showErrorMessage("请输入合法的url");
	// 		return;
	// 	}
	// 	// 更新配置文件
	// 	vscode.workspace
	// 		.getConfiguration()
	// 		.update(
	// 			"extension.llseaids.libraryUrl",
	// 			libraryUrl,
	// 			vscode.ConfigurationTarget.Global
	// 		);
	// 	ConfigPanel._updateLibraryUrl(libraryUrl);
	// 	this.getLibraryPath((path) => {
	// 		if (
	// 			path === null ||
	// 			path === undefined ||
	// 			fs.existsSync(path) === false
	// 		) {
	// 			vscode.window.showErrorMessage("库存放地址配置错误");
	// 			return;
	// 		}
	// 		// 开始获取清单
	// 		ConfigPanel._changeProgress(true);
	// 		LibraryHandler.output.appendLine("开始获取清单");
	// 		LibraryHandler.output.appendLine(libraryUrl.toString());
	// 		request(libraryUrl, { json: true }, (err: any, res: any, body: any) => {
	// 			LibraryHandler.output.show();
	// 			if (err) {
	// 				ConfigPanel._changeProgress(false);
	// 				LibraryHandler.output.appendLine("获取清单失败");
	// 				LibraryHandler.output.appendLine(err);
	// 				return;
	// 			}
	// 			var library = body.library;
	// 			if (library === undefined) {
	// 				this.output.appendLine("清单无效");
	// 				vscode.window.showErrorMessage("补全库配置失败");
	// 				ConfigPanel._changeProgress(false);
	// 				return;
	// 			}
	// 			LibraryHandler.output.appendLine(JSON.stringify(library, null, 4));
	// 			LibraryHandler.output.appendLine("库名: " + body.name);
	// 			LibraryHandler.output.appendLine("库地址: " + body.source);
	// 			if (library.javascript !== undefined && library.javascript !== null) {
	// 				LibraryHandler.output.appendLine(
	// 					"JavaScript库版本: " + library.javascript.version
	// 				);
	// 			}
	// 			if (library.lua !== undefined && library.lua !== null) {
	// 				LibraryHandler.output.appendLine("Lua库版本: " + library.lua.version);
	// 			}
	// 			vscode.window
	// 				.showInformationMessage("是否继续?", "继续", "取消")
	// 				.then((s: any) => {
	// 					if (s === "继续") {
	// 						if (
	// 							library.javascript === undefined ||
	// 							library.javascript === null
	// 						) {
	// 							LibraryHandler.output.appendLine("没有找到javascript库信息");
	// 						} else {
	// 							LibraryHandler.output.appendLine("开始配置Lirary: javascript");
	// 							new LibraryHandler().handleJavaScript(library.javascript);
	// 						}
	// 						if (library.lua === undefined || library.lua === null) {
	// 							//LibraryHandler.output.appendLine('没有找到lua库信息');
	// 						} else {
	// 							// TODO: 对lua的支持
	// 						}
	// 						return;
	// 					}
	// 					this.output.appendLine("取消操作");
	// 					this.output.hide();
	// 					ConfigPanel._changeProgress(false);
	// 					return;
	// 				});
	// 		});
	// 	});
	// }
	// public handleJavaScript(obj: { index: String; download_url: String }) {
	// 	downloadFile(
	// 		obj.download_url,
	// 		LibraryHandler.libraryPath,
	// 		(success, msg) => {
	// 			if (!success) {
	// 				LibraryHandler.output.appendLine("javascript库下载失败");
	// 				LibraryHandler.output.appendLine(msg);
	// 				vscode.window.showErrorMessage("补全库配置失败");
	// 				ConfigPanel._changeProgress(false);
	// 				return;
	// 			}
	// 			LibraryHandler.output.appendLine("javascript库下载成功");
	// 			var filePath = msg;
	// 			unzipAsync(
	// 				filePath,
	// 				LibraryHandler.libraryPath + "/JS",
	// 				(success, msg) => {
	// 					fs.unlink(filePath, () => {});
	// 					if (!success) {
	// 						LibraryHandler.output.appendLine(msg);
	// 						vscode.window.showErrorMessage("javascript库解压失败");
	// 						return;
	// 					}
	// 					LibraryHandler.output.appendLine("javascript库解压成功");
	// 					var apiPath = findFileMatchSync(msg, obj.index.toString());
	// 					if (apiPath === null) {
	// 						vscode.window.showErrorMessage("找不到指定的库");
	// 						return;
	// 					}
	// 					LibraryHandler.output.appendLine("找到Api文件" + apiPath);
	// 					vscode.workspace
	// 						.getConfiguration()
	// 						.update(
	// 							"extension.llseaids.javascriptApiPath",
	// 							apiPath.replace("\\", "/"),
	// 							vscode.ConfigurationTarget.Global
	// 						)
	// 						.then(() => {
	// 							LibraryHandler.output.appendLine("javascript补全库配置成功");
	// 							LibraryHandler.output.hide();
	// 							ConfigPanel._changeProgress(false);
	// 							vscode.window.showInformationMessage("JS补全库配置成功 ");
	// 						});
	// 				}
	// 			);
	// 		}
	// 	);
	// }

	public static getLibraryLocal() {}

	// public static getLibraryPath(
	// 	callback: (path: String | any) => any
	// ): String | any {
	// 	var path = vscode.workspace
	// 		.getConfiguration()
	// 		.get("extension.llseaids.libraryPath");
	// 	if (isNotEmpty(path)) {
	// 		callback(path);
	// 		return;
	// 	}
	// 	path = selectLibrary((path) => {
	// 		callback(path);
	// 		vscode.workspace
	// 			.getConfiguration()
	// 			.update(
	// 				"extension.llseaids.libraryPath",
	// 				path,
	// 				vscode.ConfigurationTarget.Global
	// 			)
	// 			.then(() => {
	// 				ConfigPanel._updateLibraryPath(path);
	// 				LibraryHandler.libraryPath = path;
	// 			});
	// 	});
	// }
	private cancel() {
		this.log("配置操作取消,此窗口将在10s后关闭", "WARNING");
		this.log("您可在稍后重新进行配置", "WARNING");
		setTimeout(() => {
			this.output.hide();
			this.output.dispose();
		}, 10000);
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
