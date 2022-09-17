/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-16 08:28:20
 * @LastEditTime: 2022-09-17 08:29:05
 */

import * as vscode from "vscode";
import { globalState } from "../extension";
export class ConfigScope {
	static setting(): vscode.WorkspaceConfiguration {
		return vscode.workspace.getConfiguration("extension.llseaids");
	}

	static library() {
		return {
			save: (lib: LibraryInfo): Thenable<void> => {
				return globalState.update("extension.llseaids." + lib.type, lib);
			},
			get: (language: "js" | "lua" | "py"): LibraryInfo => {
				return globalState.get("extension.llseaids." + language) as LibraryInfo;
			},
		};
	}
}

export const Sections = {
	libraryPath: "libraryPath",
};
