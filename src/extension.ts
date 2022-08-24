import * as vscode from 'vscode';
import { ConfigPanel } from './panels/ConfigPanel';
export function activate(context: vscode.ExtensionContext) {
	// show config panel
	const configCommand = vscode.commands.registerCommand("LLScriptHelper.config", () => {
		ConfigPanel.render(context.extensionUri);
	});
	const testCommand = vscode.commands.registerCommand("LLScriptHelper.test", () => {
		ConfigPanel.postMessage("change_library_ring", true);
	});
	context.subscriptions.push(configCommand, testCommand);
	vscode.commands.executeCommand('LLScriptHelper.config');
}


exports.deactivate = function () {

};
