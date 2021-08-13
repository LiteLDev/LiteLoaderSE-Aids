"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = exports.apiHost = void 0;
const vscode = require("vscode");
const debugger_1 = require("./debugger");
const LibraryConfig_1 = require("./LibraryConfig");
const reminderView_1 = require("./reminderView");
const fs = require('fs');
const fetch = require('node-fetch');
exports.apiHost = "https://lxl-upgrade.amd.rocks/Helper/Version.json";
function activate(context) {
    //检测依赖
    const result = vscode.extensions.getExtension('sumneko.lua');
    if (result === undefined) {
        vscode.window.showInformationMessage('您还没有安装 sumneko.lua 扩展依赖项', '安装').then(function (msg) {
            if (msg === '安装') {
                vscode.commands.executeCommand('workbench.action.quickOpen', 'ext install sumneko.lua');
            }
        });
    }
    else {
        fetch(exports.apiHost)
            .then((res) => res.text())
            .then((json) => {
            const nowVersion = vscode.workspace.getConfiguration().get("LXLDevHelper.version");
            const arrs = JSON.parse(json);
            console.log(arrs.version);
            if (nowVersion !== arrs.version) {
                const lib = new LibraryConfig_1.LibraryConfig();
                lib.run(arrs);
            }
        });
    }
    vscode.workspace.onDidCreateFiles(function (e) {
        e.files.forEach(function (p) {
            let path = p.fsPath.toLowerCase();
            if (path.includes("lxl.js")) {
                const dir = vscode.workspace.getConfiguration().get("LXLDevHelper.LibraryPath");
                if (dir === null || dir === "") {
                    vscode.window.showErrorMessage("未配置Library", "配置").then(function (p) {
                        if (p === "配置") {
                            new LibraryConfig_1.LibraryConfig().run(exports.apiHost);
                        }
                    });
                }
                else {
                    setTimeout(function () {
                        var _a;
                        (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.insertSnippet(new vscode.SnippetString('//LiteXLoader Dev Helper\n/// <reference path="' + dir + '/JS/Api.js" /> \n\n\n$1'));
                    }, 1000);
                }
            }
        });
    });
    const provider2 = vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems(document, position) {
            const snippetCompletion = new vscode.CompletionItem({
                description: " 导入LiteXLoader补全",
                label: "lxl"
            });
            const dir = vscode.workspace.getConfiguration().get("LXLDevHelper.LibraryPath");
            if (dir === null || dir === "") {
                vscode.window.showErrorMessage("未配置Library", "配置").then(function (p) {
                    if (p === "配置") {
                        new LibraryConfig_1.LibraryConfig().run(exports.apiHost);
                    }
                });
            }
            else {
                snippetCompletion.insertText = new vscode.SnippetString('//LiteXLoader Dev Helper\n/// <reference path="' + dir + '/JS/Api.js" /> \n\n\n$1');
            }
            return [
                snippetCompletion
            ];
        }
    }, '.' // triggered whenever a '.' is being typed
    );
    context.subscriptions.push(provider2);
    let disposable5 = vscode.commands.registerCommand('LXLDevHelper.load', (fileUri) => {
        debugger_1.loadPlugins(fileUri);
    });
    let jsapi = vscode.commands.registerCommand('LXLDevHelper.JSApi', (editor, fileUri) => {
        let edit = editor.get(fileUri);
        console.info(edit.values);
    });
    let disposable3 = vscode.commands.registerCommand('LXLDevHelper.reload', (fileUri) => {
        debugger_1.reloadPlugins(fileUri);
    });
    let disposable4 = vscode.commands.registerCommand('LXLDevHelper.runner', () => {
        debugger_1.runTerminal();
    });
    let disposable2 = vscode.commands.registerCommand('LXLDevHelper.stop', () => {
        debugger_1.stopTerminal();
    });
    //showDocs
    let disposable = vscode.commands.registerCommand('LXLDevHelper.showDocs', () => {
        reminderView_1.ReminderView.show(context);
    });
    context.subscriptions.push(disposable, disposable2, disposable3, disposable4, disposable5, jsapi);
    vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
    vscode.window.onDidCloseTerminal(() => {
        vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
        debugger_1.terminal === null || debugger_1.terminal === void 0 ? void 0 : debugger_1.terminal.dispose();
        debugger_1.reSetTerminal();
    });
}
exports.activate = activate;
exports.deactivate = function () {
    vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
    debugger_1.terminal === null || debugger_1.terminal === void 0 ? void 0 : debugger_1.terminal.dispose();
    debugger_1.reSetTerminal();
};
//# sourceMappingURL=extension.js.map