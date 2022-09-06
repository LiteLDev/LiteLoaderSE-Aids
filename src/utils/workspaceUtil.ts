/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-05 23:52:28
 * @LastEditTime: 2022-09-06 10:36:19
 */
import * as fs from "fs";
import * as vscode from "vscode";
import { ConfigPanel } from "../panels/ConfigPanel";
export function checkBDSPath(path: string | null): boolean {
	if (path === null) {
		return false;
	}
	if (!fs.statSync(path).isDirectory()) {
		return false;
	}
	// platform
	if (process.platform === "win32") {
		return fs.existsSync(path + "\\bedrock_server_mod.exe");
	}
	return fs.existsSync(path + "/bedrock_server_mod");
}

export function getBDSPath(): string {
	const path = vscode.workspace
		.getConfiguration("extension.llseaids")
		.get("bdsPath") as string;
	if (checkBDSPath(path)) {
		// platform
		if (process.platform === "win32") {
			return path + "\\bedrock_server_mod.exe";
		}
		return path + "/bedrock_server_mod";
	} else {
		vscode.window.showErrorMessage("BDS路径不合法,请重新设置BDS路径");
		vscode.commands.executeCommand("extension.llseaids.config");
	}
	return "";
}

export function getBDSCwdPath(): string {
	const path = vscode.workspace
		.getConfiguration("extension.llseaids")
		.get("bdsPath") as string;
	if (checkBDSPath(path)) {
		return path;
	} else {
		vscode.window.showErrorMessage("BDS路径不合法,请重新设置BDS路径");
		vscode.commands.executeCommand("extension.llseaids.config");
	}
	return "";
}
