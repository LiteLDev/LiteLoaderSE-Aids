"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuaRunner = void 0;
const vscode = require("vscode");
const fs = require("fs");
const path = require('path');
class LuaRunner {
    constructor() {
        this.uriList = new Array();
    }
    dispose() {
        this.terminal = undefined;
    }
    run(fileUri) {
        this.runbdsContent();
    }
    load(fileUri) {
        if (this.terminal === undefined) {
            vscode.workspace.getConfiguration('LLScriptHelper').update('isrunning', false);
            vscode.window.showInformationMessage('BDS控制台未启动', '启动').then(function (t) {
                if (t === '启动') {
                    var lua = new LuaRunner();
                    lua.runbdsContent();
                }
            });
        }
        else {
            var uris = fileUri.fsPath;
            if (this.uriList.includes(uris)) {
                var fileName = path.basename(uris);
                this.terminal.sendText('lxl reload ' + '"' + fileName + '"');
                vscode.window.showInformationMessage('Lua ' + fileName + ' 已重载');
            }
            else {
                this.terminal.sendText('lxl load ' + '"' + uris + '"');
                vscode.window.showInformationMessage('Lua ' + uris + ' 已加载');
                this.uriList.push(uris);
            }
        }
    }
    runbdsContent() {
        var bdsDir = String(vscode.workspace.getConfiguration('LXl-Lua-runner').get('bds-lxlDir'));
        if (bdsDir === 'null' || bdsDir === '') {
            vscode.window.showInformationMessage('未配置带有LXL环境的BDS目录', '选择目录').then(function (t) {
                if (t === '选择目录') {
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
                }
            });
        }
        else {
            if (this.terminal === undefined) {
                var fileList = fs.readdirSync(bdsDir);
                var bds = '\\bedrock_server.exe';
                if (fileList.indexOf('bedrock_server.exe') === -1) {
                    bds = '\\bedrock_server_mod.exe';
                }
                this.terminal = vscode.window.createTerminal({
                    name: 'LXLDebug',
                    shellPath: "ping -t 127.0.0.1"
                });
                this.terminal.show();
                vscode.workspace.getConfiguration('LXl-Lua-runner').update('isrunning', true);
            }
            else {
                vscode.window.showWarningMessage('控制台已启动，请勿重复操作');
            }
        }
    }
}
exports.LuaRunner = LuaRunner;
//# sourceMappingURL=runner.js.map