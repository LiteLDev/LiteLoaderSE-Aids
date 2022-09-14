/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from "vscode";
import fs = require("fs");
import https = require("https");
import { findFileMatchSync, unzipAsync } from "../utils/FileUtils";
import * as axios from "axios";
export class LibraryHandler {
	private output: vscode.OutputChannel;
	private libraryPath: String;
	constructor() {
		this.output = vscode.window.createOutputChannel("LLScriptHelper");
		let libPath = vscode.workspace
			.getConfiguration()
			.get("extension.llseaids.libraryPath") as String;
		this.libraryPath = libPath;
	}
	public start() {
		const repo = "https://github.com/LiteLScript-Dev/HelperLib/raw/master/";
		console.log("start");
		this.output.show();
		this.log("开始拉取清单");
		this.pullManifest(repo)
			.then((d) => {
				console.log(d);
				this.log(d);
			})
			.catch((reason) => {
				this.log(reason);
			});
	}
	public download() {}
	public pullManifest(repoUrl: String): Promise<unknown> {
		return new Promise((resolve, reject) => {
			if (!repoUrl.startsWith("http://") && !repoUrl.startsWith("https://")) {
				reject("清单地址不合法!");
			}
			const manifestUrl = repoUrl + "/manifest.json";
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
	public config(p: Promise<LibraryHandler>) {
		let libPath = vscode.workspace
			.getConfiguration()
			.get("extension.llseaids.libraryPath");
		if (libPath === undefined || libPath === null || libPath === "") {
			vscode.window.showErrorMessage("请先配置库本地存放路径");
		}
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
	private log(msg: any) {
		const time = new Date().toLocaleTimeString();
		this.output.appendLine("[" + time + "] " + msg);
	}
}
