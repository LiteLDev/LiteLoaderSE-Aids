import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import * as os from "os";

export let terminal: vscode.Terminal | undefined;

export function runTerminal() {
    var bdsDir = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-LLScriptHelperDir'));
    var bds = String(vscode.workspace.getConfiguration().get('LLScriptHelper.bds-TaskCmd'));
    var args:string[] = vscode.workspace.getConfiguration('').get('LLScriptHelper.bds-TaskCmd-Args')!;
    if (bdsDir === 'null' || bdsDir === null) {
        selectedDir();
    }
    else if(bds === 'null' || bds === null){
        selectedTask(bdsDir);
    }
    else {
        if (terminal === undefined && os.platform() === "win32") {
            terminal = vscode.window.createTerminal({
                name: 'LiteLoaderScript Dev',
                shellPath: bds,
                shellArgs:args,
                cwd: bdsDir
            });
            terminal.show();
            vscode.workspace.getConfiguration().update('LLScriptHelper.isrunning', true);
        } 
        else{

            terminal = vscode.window.createTerminal({
                name: 'LiteLoaderScript Dev',
                shellPath: bds,
                shellArgs:args,
                cwd: bdsDir
            });
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
    else {
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
    else {
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
            }).then(function (uri) {
                if (uri !== undefined) {
                    var uris = uri[0].fsPath;
                    vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-LLScriptHelperDir', uris);
                    vscode.window.showInformationMessage('路径选择成功：' + uris);
                    selectedTask(uris);
                }
            });
        }
    });
}

function selectedTask(uris:string){
    //搜索bds(windows)
    if(os.platform() !== "win32"){
        var fileList = fs.readdirSync(uris);
        if(fileList.indexOf("bedrock_server.exe") != -1){
            vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd',"bedrock_server.exe");
            vscode.workspace.getConfiguration('').update("LLScriptHelper.bds-TaskCmd-Args",['| pause']);
            vscode.window.showInformationMessage('启动命令选择成功：' + "bedrock_server.exe");
        } 
        else if(fileList.indexOf("bedrock_server_mod.exe") != -1){
            vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd',"bedrock_server_mod.exe");
            vscode.workspace.getConfiguration('').update("LLScriptHelper.bds-TaskCmd-Args",['| pause']);
            vscode.window.showInformationMessage('启动命令选择成功：' + "bedrock_server_mod.exe");
        }
        else{
            vscode.window.showWarningMessage('没有找到BDS主程序','手动输入').then(async function (t) {
                if(t === "手动输入"){
                    let task = await vscode.window.showInputBox({placeHolder:'请输入您的启动命令'});
                    if (task) {
                        let uri = vscode.Uri.parse(task);
                        let uriself = uri.fsPath
                        if(uri.fsPath[0] === '/'){
                            uriself = uri.fsPath.substring(1)
                        }
                        vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd',uriself);
                        vscode.workspace.getConfiguration('').update("LLScriptHelper.bds-TaskCmd-Args",[]);
                        await vscode.window.showInformationMessage('启动命令选择成功：' + uriself);
                    } 
                }
            });
        }
        
    } else{
        vscode.workspace.getConfiguration('').update('LLScriptHelper.bds-TaskCmd','bedrock_server');
        vscode.workspace.getConfiguration('').update("LLScriptHelper.bds-TaskCmd-Args",[]);
        vscode.window.showWarningMessage('无法推导BDS启动命令,请打开settings.json手动设置','我知道了');
        ///openLocalFile(+"\\.vscode\\settings.json");
    }
}

export function reSetTerminal() {
    terminal = undefined;
}

export function openLocalFile(filePath: string) {
    // 获取TextDocument对象
    vscode.workspace.openTextDocument(filePath)
    .then(doc => {
        // 在VSCode编辑窗口展示读取到的文本
        vscode.window.showTextDocument(doc);
    }, err => {
        console.log(`Open ${filePath} error, ${err}.`);
    }).then(undefined, err => {
        console.log(`Open ${filePath} error, ${err}.`);
    });
}