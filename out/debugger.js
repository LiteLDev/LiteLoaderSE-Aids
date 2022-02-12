"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reSetTerminal = exports.reloadPlugins = exports.loadPlugins = exports.stopTerminal = exports.runTerminal = exports.terminal = void 0;
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
function runTerminal() {
    var bdsDir = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-LLScriptHelperDir'));
    if (bdsDir === 'null' || bdsDir === null) {
        selectedDir();
    }
    else {
        if (exports.terminal === undefined) {
            const libary = vscode.extensions.getExtension('moxicat.LLScriptHelper');
            const path = (libary === null || libary === void 0 ? void 0 : libary.extensionPath) + "/runningCache.bat";
            var bds = vscode.workspace.getConfiguration().get('LLScriptHelper.bdsRunType', true);
            fs.writeFile(path, bdsDir + "\\" + bds + "\npause", err => {
                if (err) {
                    console.error(err);
                    return;
                }
                exports.terminal = vscode.window.createTerminal({
                    name: 'LiteLoaderScript Dev',
                    shellPath: path,
                    cwd: bdsDir,
                    message: "LiteLoaderScript Helper Debug Mode"
                });
                exports.terminal.sendText("pause");
                exports.terminal.show();
                vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', true);
            });
        }
    }
}
exports.runTerminal = runTerminal;
function stopTerminal() {
    exports.terminal === null || exports.terminal === void 0 ? void 0 : exports.terminal.sendText('stop');
    exports.terminal === null || exports.terminal === void 0 ? void 0 : exports.terminal.dispose();
    exports.terminal = undefined;
    vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
}
exports.stopTerminal = stopTerminal;
function loadPlugins(fileUri) {
    if (exports.terminal === undefined) {
        vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
        vscode.window.showInformationMessage('LiteLoader控制台未启动', '启动').then(function (t) {
            if (t === '启动') {
                runTerminal();
            }
        });
    }
    else {
        var uris = fileUri.fsPath;
        exports.terminal.sendText('lxl load ' + '"' + uris + '"');
        vscode.window.showInformationMessage('插件 ' + uris + ' 已加载');
    }
}
exports.loadPlugins = loadPlugins;
function reloadPlugins(fileUri) {
    if (exports.terminal === undefined) {
        vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
        vscode.window.showInformationMessage('BDS控制台未启动', '启动').then(function (t) {
            if (t === '启动') {
                runTerminal();
            }
        });
    }
    else {
        var uris = path.basename(fileUri.fsPath);
        exports.terminal.sendText('lxl reload ' + '"' + uris + '"');
        vscode.window.showInformationMessage('插件 ' + uris + ' 已重载');
    }
}
exports.reloadPlugins = reloadPlugins;
function selectedDir() {
    vscode.window.showInformationMessage('未配置带有LiteLoader环境的BDS目录', '选择目录').then(function (t) {
        if (t === '选择目录') {
            vscode.window.showOpenDialog({
                title: '选择带有LiteLoader环境的BDS根目录',
                canSelectFolders: true,
                canSelectMany: false
            }).then(function (uri) {
                if (uri !== undefined) {
                    var uris = uri[0].fsPath;
                    vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-LLScriptHelperDir', uris);
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