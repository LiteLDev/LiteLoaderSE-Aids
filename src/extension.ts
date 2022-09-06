/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-09-05 21:52:12
 */
/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-09-04 13:20:29
 */
import * as vscode from "vscode";
import { WorkspaceHandler } from "./handler/WorkSpaceHandler";
import { TerminalHelper } from "./terminal/TerminalHelper";
import * as nls from "vscode-nls";
const localize = nls.config({ messageFormat: nls.MessageFormat.file })();

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
	localize("", "");
}

exports.deactivate = function () {};

exports.activate = activate;
