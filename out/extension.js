"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showLXLDocs = exports.activate = exports.apiHost = void 0;
const vscode = require("vscode");
const configure_1 = require("./configure");
const runner_1 = require("./runner");
const update_1 = require("./update");
const fs = require('fs');
exports.apiHost = "https://raw.githubusercontent.com/moxicode/LXLDevHelper/master/Helper/version.json";
function activate(context) {
    console.log('Congratulations, your extension "lxldev-lua" is now active!');
    //update
    let disposable3 = vscode.commands.registerCommand('lxldev-lua.update', () => {
        const path = vscode.workspace.rootPath;
        fs.exists(path + '/Helper/version.json', (exists) => {
            if (exists) {
                update_1.update(path + '/Helper/version.json');
            }
            else {
                vscode.window.showErrorMessage('当前未配置项目');
            }
        });
    });
    let disposable4 = vscode.commands.registerCommand('lxldev-lua.runner', () => {
        runner_1.run();
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
            vscode.window.showQuickPick([
                "确定配置",
                "取消操作"
            ], {
                canPickMany: false,
                ignoreFocusOut: true,
                title: "您确定配置项目吗?",
                placeHolder: "是否配置当前项目为LXL-Lua项目"
            }).then(function (msg) {
                // eslint-disable-next-line eqeqeq
                if (msg == "确定配置") {
                    configure_1.configure();
                }
            });
        }
    });
    context.subscriptions.push(disposable, disposable2, disposable3, disposable4);
}
exports.activate = activate;
//funcions
function hasWorkspace() {
    return vscode.workspace.workspaceFolders !== undefined;
}
function showLXLDocs(context) {
    var plane = vscode.window.createWebviewPanel("showdocs", "LiteXLoaderDocs", vscode.ViewColumn.One, {
        retainContextWhenHidden: true,
        enableScripts: true
    });
    plane.webview.html = `<!DOCTYPE html>
		<html lang="zh">
		<script language="javascript" type="text/javascript">   
		window.location.href = 'https://lxl.litetitle.com/#/zh_CN/Development/';
	</script>
		</html>
		  `;
}
exports.showLXLDocs = showLXLDocs;
//# sourceMappingURL=extension.js.map