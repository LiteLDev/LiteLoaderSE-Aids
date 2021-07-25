import * as vscode from 'vscode';
import { configure } from './configure';
import { LuaRunner } from './runner';
import { showed, update } from './update';
const fs = require('fs');
export const apiHost = "https://cdn.jsdelivr.net/gh/moxicode/LXLDevHelper@master/Helper/version.json";
const path = require('path');

export function activate(context: vscode.ExtensionContext) {


	//UPDATE 
	showed(context);


	const luarunner = new LuaRunner();
	vscode.window.onDidCloseTerminal((t) => {
		if (t.name === 'LXLDebug') {
			vscode.workspace.getConfiguration('LXl-Lua-runner').update('isrunning', false);
			t?.dispose;
		}
	});
	if (luarunner.terminal === undefined) {
		vscode.workspace.getConfiguration('LXl-Lua-runner').update('isrunning', false);
	}
	//load/reload
	let disposable5 = vscode.commands.registerCommand('lxldev-lua.load', (fileUri: vscode.Uri) => {
		luarunner.load(fileUri);
	});
	let disposable7 = vscode.commands.registerCommand('lxldev-lua.out', (fileUri: vscode.Uri) => {
		if (vscode.workspace.rootPath !== undefined) {
			vscode.window.showOpenDialog({
				title: '选择要导出的目录',
				canSelectFolders: true,
				canSelectMany: false
			}).then(function (uri) {
				if (uri !== undefined) {
					var uris = uri[0].fsPath;
					var fileDirectory = vscode.workspace.rootPath;
					var resStrs = "";
					if (fs.existsSync(fileDirectory)) {
						fs.readdir(fileDirectory, function (err: any, files: any[]) {
							if (err) {
								console.log(err);
								return;
							}
							var count = files.length;
							var results = {};
							files.forEach(function (filename: string | number) {
								if (path.extname(filename) === '.lua') {
									resStrs += '\r'+filename;
									fs.writeFileSync(uris + '\\' + filename, fs.readFileSync(fileDirectory + '\\' + filename));
								}
								
							});
							vscode.window.showInformationMessage('导出文件'+resStrs+'\n 到'+uris+'成功');
						});
						
					}
					else {
						console.log(fileDirectory + "  Not Found!");
					}
				}
			});
		} else {
			vscode.window.showErrorMessage('获取路径错误');
		};
	});
	let disposable6 = vscode.commands.registerCommand('lxldev-lua.configDir', (fileUri: vscode.Uri) => {
		vscode.window.showOpenDialog({
			title: '选择带有LXL环境的BDS根目录',
			canSelectFolders: true,
			canSelectMany: false
		}).then(function (uri) {
			if (uri !== undefined) {
				var uris = uri[0].fsPath;
				vscode.workspace.getConfiguration('LXl-Lua-runner').update('bds-lxlDir', uris);
				vscode.window.showInformationMessage('选择成功：' + uris);
			}
		});
	});
	//update
	let disposable3 = vscode.commands.registerCommand('lxldev-lua.update', () => {
		const path = vscode.workspace.rootPath;
		fs.exists(path + '/Helper/version.json', (exists: any) => {
			if (exists) {
				update(path + '/Helper/version.json');
			} else {
				vscode.window.showErrorMessage('当前未配置项目');
			}
		});
	});

	let disposable4 = vscode.commands.registerCommand('lxldev-lua.runner', (fileUri: vscode.Uri) => {
		luarunner.run(fileUri);
	});

	//showDocs
	let disposable = vscode.commands.registerCommand('lxldev-lua.showDocs', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		showLXLDocs(context);
		vscode.window.showInformationMessage('LiteXLoaderDocs Showed');
	});

	//configure
	let disposable2 = vscode.commands.registerCommand('lxldev-lua.configure', () => {
		if (hasWorkspace()) {
			vscode.window.showQuickPick(
				[
					"确定配置",
					"取消操作"
				],
				{
					canPickMany: false,
					ignoreFocusOut: true,
					title: "您确定配置项目吗?",
					placeHolder: "是否配置当前项目为LXL-Lua项目"
				}
			).then(function (msg) {
				// eslint-disable-next-line eqeqeq
				if (msg == "确定配置") {
					configure();
				}
			});
		}
	});
	context.subscriptions.push(disposable, disposable2, disposable3, disposable4, disposable5, disposable6, disposable7);
}

//funcions
function hasWorkspace() {
	return vscode.workspace.workspaceFolders !== undefined;
}



export function showLXLDocs(context: vscode.ExtensionContext) {
	var plane = vscode.window.createWebviewPanel(
		"showdocs",
		"LiteXLoaderDocs",
		vscode.ViewColumn.One,
		{
			retainContextWhenHidden: true,
			enableScripts: true
		}
	);
	plane.webview.html = `<!DOCTYPE html>
		<html lang="zh">
		<script language="javascript" type="text/javascript">   
		window.location.href = 'https://lxl.litetitle.com/#/zh_CN/Development/';
	</script>
		</html>
		  `;
}



exports.deactivate = function () {
	vscode.workspace.getConfiguration('LXl-Lua-runner').update('isrunning', false);
	const luarunner = new LuaRunner();
	luarunner.terminal?.dispose;
	luarunner.terminal = undefined;
};
