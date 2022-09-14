/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-09-14 12:35:56
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

async function activate(context: vscode.ExtensionContext) {
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
