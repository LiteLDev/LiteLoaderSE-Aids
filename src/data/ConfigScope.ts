/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-16 08:28:20
 * @LastEditTime: 2022-09-18 15:19:46
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
			get: (language: "dts" | "lua" | "py"): LibraryInfo => {
				return globalState.get("extension.llseaids." + language) as LibraryInfo;
			},
			clear: () => {
				globalState.update("extension.llseaids.js", undefined);
			},
		};
	}

	static global() {
		return {
			save: (key: string, value: any): Thenable<void> => {
				return globalState.update("extension.llseaids." + key, value);
			},
			get: (key: string): any => {
				return globalState.get("extension.llseaids." + key);
			},
		};
	}
}
export const pinnedSources = [
	{
		// {source1_name}
		name: "官方源 (Github Raw)",
		// {source1_repo}
		repo: "https://github.com/LiteLScript-Dev/HelperLib/raw/master/",
	},
	{
		name: "镜像源 (Codeberg)",
		repo: "https://codeberg.org/moixsuki/HelperLib/raw/branch/master/mirror/",
	},
];

export const Sections = {
	libraryPath: "libraryPath",
	noReminder: "noReminder",
	noReminder2: "noReminder2",
	bdsPath: "bdsPath",
};
