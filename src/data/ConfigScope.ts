/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-16 08:28:20
 * @LastEditTime: 2022-09-16 09:56:36
 */

import * as vscode from "vscode";
export class ConfigScope {
	static setting(): vscode.WorkspaceConfiguration {
		return vscode.workspace.getConfiguration("extension.llseaids");
	}
}

export const Sections = {
	libraryPath: "libraryPath",
};
