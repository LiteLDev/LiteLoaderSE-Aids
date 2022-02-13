"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reSetTerminal = exports.reloadPlugins = exports.loadPlugins = exports.stopTerminal = exports.runTerminal = exports.terminal = void 0;
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const os = require("os");
function runTerminal() {
    var bdsDir = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-LLScriptHelperDir'));
    if (bdsDir === 'null' || bdsDir === null) {
        selectedDir();
    }
    else {
        if (exports.terminal === undefined) {
            //var fileList = fs.readdirSync(bdsDir);
            var bds = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-TaskCmd'));
            exports.terminal = vscode.window.createTerminal({
                name: 'LiteLoaderScript Dev',
                shellPath: bds,
                cwd: bdsDir
            });
            exports.terminal.show();
            vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', true);
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
        //reload命令
        var reload = 'lxl reload ';
        if (uris.indexOf(' ') != -1) {
            reload = 'lxl reload ' + '"' + uris + '"';
        }
        else {
            reload = 'lxl reload ' + uris;
        }
        exports.terminal.sendText(reload);
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
                return __awaiter(this, void 0, void 0, function* () {
                    if (uri !== undefined) {
                        var uris = uri[0].fsPath;
                        vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-LLScriptHelperDir', uris);
                        vscode.window.showInformationMessage('选择成功：' + uris);
                        //搜索bds(windows)
                        if (os.platform() === "win32") {
                            var fileList = fs.readdirSync(uris);
                            var taskuri = '';
                            if ("bedrock_server.exe" in fileList) {
                                taskuri = "bedrock_server.exe";
                                vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd', "bedrock_server.exe");
                            }
                            else if ("bedrock_server_mod.exe" in fileList) {
                                taskuri = "bedrock_server_mod.exe";
                                vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd', "bedrock_server_mod.exe");
                            }
                            else {
                                let task = yield vscode.window.showInputBox({ placeHolder: '未找到bedrock_server.exe或bedrock_server_mod.exe' });
                                if (task) {
                                    let uri = vscode.Uri.parse(task);
                                    vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd', uri.path);
                                    taskuri = uri.path;
                                }
                            }
                            yield vscode.window.showInformationMessage('选择成功：' + taskuri);
                        }
                    }
                });
            });
        }
    });
}
function reSetTerminal() {
    exports.terminal = undefined;
}
exports.reSetTerminal = reSetTerminal;
//# sourceMappingURL=debugger.js.map