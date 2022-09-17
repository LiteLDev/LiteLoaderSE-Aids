/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-09-17 08:37:11
 */
/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-09-04 13:20:29
 */
import * as vscode from "vscode";
import { LibraryHandler } from "./handler/LibraryHandler";
import { WorkspaceHandler } from "./handler/WorkSpaceHandler";
import { TerminalHelper } from "./terminal/TerminalHelper";
export let globalState: vscode.Memento;
async function activate(context: vscode.ExtensionContext) {
	globalState = context.globalState;

	// init handler
	new WorkspaceHandler(context)
		.init(context)
		.snippetCompletion()
		.onCreateFile();
	// init debugger
	//activateDebugger(context);
	// set menu visibility
	new TerminalHelper(context);
	new LibraryHandler().start();
}

exports.deactivate = function () {};

exports.activate = activate;
