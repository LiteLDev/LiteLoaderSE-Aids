import * as vscode from 'vscode';
import { WorkspaceHandler } from './handler/WorkSpaceHandler';
import { ConfigPanel } from './panels/ConfigPanel';
import { DocsPanel } from './panels/DocsPanel';
export function activate(context: vscode.ExtensionContext) {
	// show config panel
	const configCommand = vscode.commands.registerCommand("LLScriptHelper.config", () => {
		ConfigPanel.render(context.extensionUri);
	});
	// show docs panel
	const docsCommand = vscode.commands.registerCommand("LLScriptHelper.docs", () => {
		DocsPanel.render();
	});
	// debug
	const testCommand = vscode.commands.registerCommand("LLScriptHelper.test", () => {
		ConfigPanel.postMessage("change_library_ring", true);
	});
	context.subscriptions.push(configCommand, testCommand,docsCommand);

	var libraryUrl = vscode.workspace.getConfiguration().get('LLScriptHelper.libraryUrl');
	// may first time run
	var libraryPath = vscode.workspace.getConfiguration().get('LLScriptHelper.libraryPath');
	if (libraryUrl === null || libraryPath === null) {
		vscode.commands.executeCommand('LLScriptHelper.config');
	}
	// init handler
	new WorkspaceHandler(context)
		.snippetCompletion()
		.onCreateFile();
}


exports.deactivate = function () {

};
