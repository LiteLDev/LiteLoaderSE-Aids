/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-05 23:52:28
 * @LastEditTime: 2022-09-17 15:26:54
 */
import * as fs from "fs";
import * as vscode from "vscode";

// export function getBDSPath(): string | null {
// 	const path = vscode.workspace
// 		.getConfiguration("extension.llseaids")
// 		.get("bdsPath") as string;
// 	if (checkBDSPath(path)) {
// 		// platform
// 		if (process.platform === "win32") {
// 			return path + "\\bedrock_server_mod.exe";
// 		}
// 		return path + "/bedrock_server_mod";
// 	} else {
// 		vscode.window.showErrorMessage("BDS路径不合法,请重新设置BDS路径");
// 		vscode.commands.executeCommand("extension.llseaids.config");
// 	}
// 	return null;
// }

// export function getBDSCwdPath(): string | null {
// 	const path = vscode.workspace
// 		.getConfiguration("extension.llseaids")
// 		.get("bdsPath") as string;
// 	if (checkBDSPath(path)) {
// 		return path;
// 	} else {
// 		vscode.window.showErrorMessage("BDS路径不合法,请重新设置BDS路径");
// 		vscode.commands.executeCommand("extension.llseaids.config");
// 	}
// 	return null;
// }
