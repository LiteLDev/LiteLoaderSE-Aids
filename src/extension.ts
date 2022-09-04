/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-09-04 13:51:06
 */
/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-09-04 13:20:29
 */
import * as vscode from "vscode";
import { activateDebugger } from "./debugger/ActivateDebugger";
import { WorkspaceHandler } from "./handler/WorkSpaceHandler";

async function activate(context: vscode.ExtensionContext) {
	// init handler
	new WorkspaceHandler(context)
		.init(context)
		.snippetCompletion()
		.onCreateFile();
	// init debugger
	activateDebugger(context);
}

exports.deactivate = function () {};

exports.activate = activate;
