import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
export let terminal: vscode.Terminal | undefined;

export function runTerminal() {
    var bdsDir = String(vscode.workspace.getConfiguration().get('LXLDevHelper.bds-lxlDir'));
    if (bdsDir === 'null' || bdsDir === null) {
        selectedDir();
    }
    else {
        if (terminal === undefined) {
            var fileList = fs.readdirSync(bdsDir);
            var bds = '\\bedrock_server.exe';
            if(fileList.indexOf('bedrock_server.exe') === -1){
                bds = '\\bedrock_server_mod.exe';
            }
            terminal = vscode.window.createTerminal({
                name: 'LXLDevHelper',
                shellPath: bdsDir + bds,
                cwd: bdsDir
            });
            terminal.show();
            vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', true);
        }
    }
}
export function stopTerminal() {
    terminal?.sendText('stop');
    terminal?.dispose();
    terminal = undefined;
    vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
}

export function loadPlugins(fileUri: vscode.Uri) {
    if (terminal === undefined) {
        vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
        vscode.window.showInformationMessage('BDS控制台未启动', '启动').then(function (t) {
            if (t === '启动') {
                runTerminal();
            }
        });
    }
    else{
        var uris = fileUri.fsPath;
        terminal.sendText('lxl load ' + '"' + uris + '"');
        vscode.window.showInformationMessage('插件 ' + uris + ' 已加载');
    }
}
export function reloadPlugins(fileUri: vscode.Uri) {
    if (terminal === undefined) {
        vscode.workspace.getConfiguration().update('LXLDevHelper.isrunning', false);
        vscode.window.showInformationMessage('BDS控制台未启动', '启动').then(function (t) {
            if (t === '启动') {
                runTerminal();
            }
        });
    }
    else{
        var uris = path.basename(fileUri.fsPath);
        terminal.sendText('lxl reload ' + '"' + uris + '"');
        vscode.window.showInformationMessage('插件 ' + uris + ' 已重载');
    }
}

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

    export function reSetTerminal() {
        terminal = undefined;
    }