import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import * as os from "os";

export let terminal: vscode.Terminal | undefined;

export function runTerminal() {
    var bdsDir = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-LLScriptHelperDir'));
    if (bdsDir === 'null' || bdsDir === null) {
        selectedDir();
    }
    else {
        if (terminal === undefined) {
            //var fileList = fs.readdirSync(bdsDir);
            var bds = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-TaskCmd'));
            terminal = vscode.window.createTerminal({
                name: 'LiteLoaderScript Dev',
                shellPath: bds,
                cwd: bdsDir
            });
            terminal.show();
            vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', true);
        }
    }
}

export function stopTerminal() {
    terminal?.sendText('stop');
    terminal?.dispose();
    terminal = undefined;
    vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
}

export function loadPlugins(fileUri: vscode.Uri) {
    if (terminal === undefined) {
        vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
        vscode.window.showInformationMessage('LiteLoader控制台未启动', '启动').then(function (t) {
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
        vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', false);
        vscode.window.showInformationMessage('BDS控制台未启动', '启动').then(function (t) {
            if (t === '启动') {
                runTerminal();
            }
        });
    }
    else{
        var uris = path.basename(fileUri.fsPath);
        //reload命令
        var reload = 'lxl reload ';
        if(uris.indexOf(' ') != -1){
            reload = 'lxl reload ' + '"' + uris + '"';
        } else{
            reload = 'lxl reload ' + uris;
        }
        terminal.sendText(reload);
        vscode.window.showInformationMessage('插件 ' + uris + ' 已重载');
    }
}

function selectedDir() {
    vscode.window.showInformationMessage('未配置带有LiteLoader环境的BDS目录', '选择目录').then(function (t) {
        if (t === '选择目录') {
            vscode.window.showOpenDialog({
                title: '选择带有LiteLoader环境的BDS根目录',
                canSelectFolders: true,
                canSelectMany: false
            }).then(async function (uri) {
                if (uri !== undefined) {
                    var uris = uri[0].fsPath;
                    vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-LLScriptHelperDir', uris);
                    vscode.window.showInformationMessage('选择成功：' + uris);

                    //搜索bds(windows)
                    if(os.platform() === "win32"){
                        var fileList = fs.readdirSync(uris);
                        var taskuri = '';
                        if("bedrock_server.exe" in fileList){
                            taskuri = "bedrock_server.exe";
                            vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd',"bedrock_server.exe");
                        } 
                        else if("bedrock_server_mod.exe" in fileList){
                            taskuri = "bedrock_server_mod.exe";
                            vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd',"bedrock_server_mod.exe");
                        }
                        else{
                            let task = await vscode.window.showInputBox({placeHolder:'未找到bedrock_server.exe或bedrock_server_mod.exe'});
                            if (task) {
                                let uri = vscode.Uri.parse(task);
                                vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd',uri.path);
                                taskuri = uri.path
                            }
                        }
                        await vscode.window.showInformationMessage('选择成功：' + taskuri);
                    }
                }
            });
        }
    });
}

export function reSetTerminal() {
    terminal = undefined;
}