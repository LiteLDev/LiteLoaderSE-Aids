"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reSetTerminal = exports.reloadPlugins = exports.loadPlugins = exports.stopTerminal = exports.runTerminal = exports.terminal = void 0;
const vscode = require("vscode");
const path = require("path");
function runTerminal() {
    var bdsDir = String(vscode.workspace.getConfiguration().get('LXLDevHelper.bds-lxlDir'));
    if (bdsDir === 'null' || bdsDir === null) {
        selectedDir();
    }
    else {
        if (exports.terminal === undefined) {
            exports.terminal = vscode.window.createTerminal({
                name: 'LXLDevHelper',
                shellPath: bdsDir + '\\bedrock_server.exe',
                cwd: bdsDir
            });
            exports.terminal.show();
            vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', true);
        }
    }
}
exports.runTerminal = runTerminal;
function stopTerminal() {
    exports.terminal === null || exports.terminal === void 0 ? void 0 : exports.terminal.sendText('stop');
    exports.terminal === null || exports.terminal === void 0 ? void 0 : exports.terminal.dispose();
    exports.terminal = undefined;
    vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
}
exports.stopTerminal = stopTerminal;
function loadPlugins(fileUri) {
    if (exports.terminal === undefined) {
        vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
        vscode.window.showInformationMessage('BDS控制台未启动', '启动').then(function (t) {
            if (t === '启动') {
                runTerminal();
            }
        });
    }
    else {
        var uris = fileUri.fsPath;
        exports.terminal.sendText('lxl load ' + uris);
        vscode.window.showInformationMessage('Lua ' + uris + ' 已加载');
    }
}
exports.loadPlugins = loadPlugins;
function reloadPlugins(fileUri) {
    if (exports.terminal === undefined) {
        vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
        vscode.window.showInformationMessage('BDS控制台未启动', '启动').then(function (t) {
            if (t === '启动') {
                runTerminal();
            }
        });
    }
    else {
        var uris = path.basename(fileUri.fsPath);
        exports.terminal.sendText('lxl reload ' + uris);
        vscode.window.showInformationMessage('Lua ' + uris + ' 已重载');
    }
}
exports.reloadPlugins = reloadPlugins;
function selectedDir() {
    vscode.window.showInformationMessage('未配置带有LXL环境的BDS目录', '选择目录').then(function (t) {
        if (t === '选择目录') {
            vscode.window.showOpenDialog({
                title: '选择带有LXL环境的BDS根目录',
                canSelectFolders: true,
                canSelectMany: false
            }).then(function (uri) {
                if (uri !== undefined) {
                    var uris = uri[0].fsPath;
                    vscode.workspace.getConfiguration('').update('LXLDevHelper.bds-lxlDir', uris);
                    vscode.window.showInformationMessage('选择成功：' + uris);
                }
            });
        }
    });
}
function reSetTerminal() {
    exports.terminal = undefined;
}
exports.reSetTerminal = reSetTerminal;
//# sourceMappingURL=debugger.js.map