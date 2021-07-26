"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = exports.apiHost = void 0;
const vscode = require("vscode");
const configure_1 = require("./configure");
const debugger_1 = require("./debugger");
const reminderView_1 = require("./reminderView");
const fs = require('fs');
exports.apiHost = "https://cdn.jsdelivr.net/gh/moxicode/LXLDevHelper-Libary@master/version.json";
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
    //configure libary
    vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
    const libary = vscode.extensions.getExtension('moxicat.LXLDevHelper');
    const libaryPath = (libary === null || libary === void 0 ? void 0 : libary.extensionPath) + '\\Helper';
    fs.exists(libaryPath + '\\version.json', (exists) => {
        if (exists) {
            configure_1.configure(libaryPath, true);
        }
        else {
            fs.exists(libaryPath, (exists2) => {
                if (exists2) {
                    configure_1.configure(libaryPath, false);
                }
                else {
                    configure_1.configure(libaryPath, false);
                    fs.mkdirSync(libaryPath);
                }
            });
        }
    });
    vscode.workspace.getConfiguration().update('Lua.workspace.library', [libaryPath]);
    let disposable5 = vscode.commands.registerCommand('LXLDevHelper.load', (fileUri) => {
        debugger_1.loadPlugins(fileUri);
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
    context.subscriptions.push(disposable, disposable2, disposable3, disposable4, disposable5);
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