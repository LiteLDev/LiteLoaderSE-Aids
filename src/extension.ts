/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-08-26 13:11:22
 */
import * as vscode from "vscode";
import { WorkspaceHandler } from "./handler/WorkSpaceHandler";
import { ConfigPanel } from "./panels/ConfigPanel";
import { DocsPanel } from "./panels/DocsPanel";
export function activate(context: vscode.ExtensionContext) {
  // show config panel
  const configCommand = vscode.commands.registerCommand(
    "LLScriptHelper.config",
    () => {
      ConfigPanel.render(context.extensionUri);
    }
  );
  // show docs panel
  const docsCommand = vscode.commands.registerCommand(
    "LLScriptHelper.docs",
    () => {
      DocsPanel.render();
    }
  );
  // debug
  const testCommand = vscode.commands.registerCommand(
    "LLScriptHelper.test",
    () => {
      ConfigPanel.postMessage("change_library_ring", true);
    }
  );
  context.subscriptions.push(configCommand, testCommand, docsCommand);

	var sourceUrl = vscode.workspace.getConfiguration().get('LLScriptHelper.sourceUrl');
	// may first time run
	var libraryPath = vscode.workspace.getConfiguration().get('LLScriptHelper.libraryPath');
  var javascriptApiPath = vscode.workspace.getConfiguration().get('LLScriptHelper.javascriptApiPath');
	if (sourceUrl === null || libraryPath === null || javascriptApiPath === null) {
		vscode.commands.executeCommand('LLScriptHelper.config');
	}
	// init handler
	new WorkspaceHandler(context)
		.snippetCompletion()
		.onCreateFile();
}


exports.deactivate = function () {

};
