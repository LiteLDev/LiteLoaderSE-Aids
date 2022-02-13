import * as vscode from 'vscode';
import { Task } from 'vscode';
import { loadPlugins, reloadPlugins, reSetTerminal, runTerminal, stopTerminal, terminal } from './debugger';
import { LibraryConfig } from './LibraryConfig';
import { ReminderView } from './reminderView';
const fs = require('fs');
const fetch = require('node-fetch');
export const apiHost = "https://lxl-upgrade.amd.rocks/Helper/Version.json";
export function activate(context: vscode.ExtensionContext) {
	function fsExistsSync(path: any) {
		try {
			fs.accessSync(path, fs.F_OK);
		} catch (e) {
			return false;
		}
		return true;
	}
	//检测依赖
	const result = vscode.extensions.getExtension('sumneko.lua');
	if (result === undefined) {
		vscode.window.showInformationMessage('您还没有安装 sumneko.lua 扩展依赖项', '安装').then(function (msg) {
			if (msg === '安装') {
				vscode.commands.executeCommand('workbench.action.quickOpen', 'ext install sumneko.lua');
				vscode.window.showInformationMessage('安装完成后请重启Vscode', '重启').then(function (msg) {
					if (msg === '重启') {
						vscode.commands.executeCommand('workbench.action.quickOpen', '> reload window');
					}
				});
			}
		});
	}

		fetch(apiHost)
			.then((res: any) => res.text())
			.then((json: string) => {
				const nowVersion = vscode.workspace.getConfiguration().get("LLScriptHelper.version");
				const arrs = JSON.parse(json);
				var path = vscode.workspace.getConfiguration().get("LLScriptHelper.LibraryPath", true)
				if (nowVersion !== arrs.version) {
					const lib = new LibraryConfig();
					lib.run(arrs);
				} else if (nowVersion !== arrs.version) {
					vscode.window.showInformationMessage("检测到您更新了Helper,是否重新配置补全库?", "配置").then(function (t) {
						if (t === "配置") {
							const lib = new LibraryConfig();
							lib.run(arrs);
						}
					});
					vscode.window.showWarningMessage("Tips: 项目中的补全库引用需要重新配置\n代码片段: lls");

				}
			});



	vscode.workspace.onDidCreateFiles(function (e: vscode.FileCreateEvent) {
		e.files.forEach(function (p) {
			let path = p.fsPath.toLowerCase();
			if (path.includes("lxl.js")) {
				const dir = vscode.workspace.getConfiguration().get("LLScriptHelper.LibraryPath");
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
					description: " 导入LLScriptHelper补全",
					label: "lls"
				});
				const dir = vscode.workspace.getConfiguration().get("LLScriptHelper.LibraryPath");
				if (dir === null || dir === "") {
					vscode.window.showErrorMessage("未配置Library", "配置").then(function (p) {
						if (p === "配置") {
							new LibraryConfig().run(apiHost);
						}
					});
				} else {
					snippetCompletion.insertText = new vscode.SnippetString('//LiteLoaderScript Dev Helper\n/// <reference path="' + dir + '/JS/Api.js" /> \n\n\n$1');
				}
				return [
					snippetCompletion
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	context.subscriptions.push(provider2);







	let disposable5 = vscode.commands.registerCommand('LLScriptHelper.load', (fileUri: vscode.Uri) => {
		loadPlugins(fileUri);
	});
	let jsapi = vscode.commands.registerCommand('LLScriptHelper.JSApi', (editor: vscode.WorkspaceEdit, fileUri: vscode.Uri) => {
		let edit = editor.get(fileUri);
		console.info(edit.values);
	});
	let disposable3 = vscode.commands.registerCommand('LLScriptHelper.reload', (fileUri: vscode.Uri) => {
		reloadPlugins(fileUri);
	});

	let disposable4 = vscode.commands.registerCommand('LLScriptHelper.runner', () => {
		runTerminal();
	});
	let disposable2 = vscode.commands.registerCommand('LLScriptHelper.stop', () => {
		stopTerminal();
	});

	//showDocs
	let disposable = vscode.commands.registerCommand('LLScriptHelper.showDocs', () => {
		ReminderView.show(context);
	});

	context.subscriptions.push(disposable, disposable2, disposable3, disposable4, disposable5, jsapi);


	vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
	vscode.window.onDidCloseTerminal(() => {
		vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
		terminal?.dispose();
		reSetTerminal();
	});

	//VSC开启关闭终端
	vscode.window.onDidOpenTerminal(() => {
		vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
		terminal?.dispose();
		reSetTerminal();
	})

}



exports.deactivate = function () {
	vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
	terminal?.dispose();
	reSetTerminal();
};
