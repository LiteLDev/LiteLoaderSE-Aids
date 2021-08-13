import * as vscode from 'vscode';
import { Task } from 'vscode';
import { loadPlugins, reloadPlugins, reSetTerminal, runTerminal, stopTerminal, terminal } from './debugger';
import { LibraryConfig } from './LibraryConfig';
import { ReminderView } from './reminderView';
const fs = require('fs');
const fetch = require('node-fetch');
export const apiHost = "https://lxl-upgrade.amd.rocks/Helper/Version.json";
export function activate(context: vscode.ExtensionContext) {

	//检测依赖
	const result = vscode.extensions.getExtension('sumneko.lua');
	if (result === undefined) {
		vscode.window.showInformationMessage('您还没有安装 sumneko.lua 扩展依赖项', '安装').then(function (msg) {
			if (msg === '安装') {
				vscode.commands.executeCommand('workbench.action.quickOpen', 'ext install sumneko.lua');

			}
		});
	} else {
		fetch(apiHost)
			.then((res: any) => res.text())
			.then((json: string) => {
				const nowVersion = vscode.workspace.getConfiguration().get("LXLDevHelper.version");

				const arrs = JSON.parse(json);
				console.log(arrs.version);
				if (nowVersion !== arrs.version) {
					const lib = new LibraryConfig();
					lib.run(arrs);
				}
			});
	}



	vscode.workspace.onDidCreateFiles(function (e: vscode.FileCreateEvent) {
		e.files.forEach(function (p) {
			let path = p.fsPath.toLowerCase();
			if (path.includes("lxl.js")) {
				const dir = vscode.workspace.getConfiguration().get("LXLDevHelper.LibraryPath");
				if (dir === null || dir === "") {
					vscode.window.showErrorMessage("未配置Library", "配置").then(function (p) {
						if (p === "配置") {
							new LibraryConfig().run(apiHost);
						}
					});
				} else {
					setTimeout(function () {
						vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString('//LiteXLoader Dev Helper\n/// <reference path="' + dir + '/JS/Api.js" /> \n\n\n$1'));
					}, 1000);
				}
			}
		});
	});




	const provider2 = vscode.languages.registerCompletionItemProvider(
		'javascript',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {


				const snippetCompletion = new vscode.CompletionItem({
					description: " 导入LiteXLoader补全",
					label: "lxl"
				});
				const dir = vscode.workspace.getConfiguration().get("LXLDevHelper.LibraryPath");
				if (dir === null || dir === "") {
					vscode.window.showErrorMessage("未配置Library", "配置").then(function (p) {
						if (p === "配置") {
							new LibraryConfig().run(apiHost);
						}
					});
				} else {
					snippetCompletion.insertText = new vscode.SnippetString('//LiteXLoader Dev Helper\n/// <reference path="' + dir + '/JS/Api.js" /> \n\n\n$1');
				}
				return [
					snippetCompletion
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	context.subscriptions.push(provider2);



		



	let disposable5 = vscode.commands.registerCommand('LXLDevHelper.load', (fileUri: vscode.Uri) => {
		loadPlugins(fileUri);
	});
	let jsapi = vscode.commands.registerCommand('LXLDevHelper.JSApi', (editor: vscode.WorkspaceEdit, fileUri: vscode.Uri) => {
		let edit = editor.get(fileUri);
		console.info(edit.values);
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

	context.subscriptions.push(disposable, disposable2, disposable3, disposable4, disposable5, jsapi);


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
