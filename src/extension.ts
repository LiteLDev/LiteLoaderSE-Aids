import * as vscode from 'vscode';
import { Task } from 'vscode';
import { configure } from './configure';
import { loadPlugins, reloadPlugins, reSetTerminal, runTerminal, stopTerminal, terminal } from './debugger';
import { ReminderView } from './reminderView';
const fs = require('fs');
export const apiHost = "https://cdn.jsdelivr.net/gh/moxicode/LXLDevHelper-Libary@master/version.json";
export function activate(context: vscode.ExtensionContext) {

	//检测依赖
	const result = vscode.extensions.getExtension('sumneko.lua');
	if (result === undefined) {
		vscode.window.showInformationMessage('您还没有安装 sumneko.lua 扩展依赖项', '安装').then(function (msg) {
			if (msg === '安装') {
				vscode.commands.executeCommand('workbench.action.quickOpen', 'ext install sumneko.lua');
			}
		});
	}

	//configure libary
	const libary = vscode.extensions.getExtension('moxicat.LXLDevHelper');
	const libaryPath = libary?.extensionPath + '\\Helper';
	fs.exists(libaryPath + '\\version.json', (exists: any) => {
		if (exists) {
			configure(libaryPath, true);
		} else {
			fs.exists(libaryPath, (exists2: any) => {
				if (exists2) {
					configure(libaryPath, false);
				} else {
					configure(libaryPath, false);
					fs.mkdirSync(libaryPath);
				}
			});
		}
	});
	vscode.workspace.getConfiguration().update('Lua.workspace.library', [libaryPath]);
	
	let disposable5 = vscode.commands.registerCommand('LXLDevHelper.load', (fileUri: vscode.Uri) => {
		loadPlugins(fileUri);
	});
	let disposable3 = vscode.commands.registerCommand('LXLDevHelper.reload', (fileUri: vscode.Uri) => {
		reloadPlugins(fileUri);
	});

	let disposable4 = vscode.commands.registerCommand('LXLDevHelper.runner', () => {
		runTerminal();
	});
	let disposable2 = vscode.commands.registerCommand('LXLDevHelper.stop', () => {
		stopTerminal();
	});

	//showDocs
	let disposable = vscode.commands.registerCommand('LXLDevHelper.showDocs', () => {
		ReminderView.show(context);
	});

	context.subscriptions.push(disposable, disposable2, disposable3, disposable4, disposable5);
	vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
	vscode.window.onDidCloseTerminal(() => {
		vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
		terminal?.dispose();
		reSetTerminal();
	});
}



exports.deactivate = function () {
	vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
	terminal?.dispose();
	reSetTerminal();
};
