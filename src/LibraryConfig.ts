const fs = require('fs');
import * as vscode from 'vscode';
const fetch = require('node-fetch');
import streamZip = require('node-stream-zip');
export class LibraryConfig {
    public run(arrs: any) {
        if (vscode.workspace.getConfiguration().get("LLScriptHelper.LibraryPath") !== null && vscode.workspace.getConfiguration().get("LLScriptHelper.LibraryPath") !== "") {
            const ver = vscode.workspace.getConfiguration().get("LLScriptHelper.version");
            vscode.window.showInformationMessage(arrs.notice, "更新").then(function (t) {
                if (t === "更新") {
                    vscode.window.showInformationMessage('开始更新Library：' + ver + " -> " + arrs.version);
                    const path = vscode.workspace.getConfiguration().get("LLScriptHelper.LibraryPath");
                    delDir(path);
                    new LibraryConfig().downloadFile(arrs.download, path, arrs);
                }
            });
        } else {


            
            vscode.window.showErrorMessage("未配置Library的存放地址 \nTips: 建议选择固定目录", "选择").then(function (t) {
                if (t === "使用默认") {
                    const libary = vscode.extensions.getExtension('moxicat.LLScriptHelper');
                    const path = libary?.extensionPath + "/Library";
                    vscode.workspace.getConfiguration().update("LLScriptHelper.LibraryPath", path, true).then(function () {
                        vscode.window.showInformationMessage('开始首次配置Library：' + path);
                        new LibraryConfig().downloadFile(arrs.download, path, arrs);
                    });
                } else if (t === "选择") {
                    vscode.window.showOpenDialog({
                        title: '选择自定义Library的存放地址',
                        canSelectFolders: true,
                        canSelectMany: false
                    }).then(function (uri) {
                        if (uri !== undefined) {
                            var uris = uri[0].fsPath + "/Library";
                            vscode.workspace.getConfiguration().update("LLScriptHelper.LibraryPath", uris, true).then(function () {
                                vscode.window.showInformationMessage('开始首次配置Library：' + uris);
                                new LibraryConfig().downloadFile(arrs.download, uris, arrs);
                            });
                        }
                    });
                }
            });
        } 


    }

    downloadFile(url: String, dirUri: String | undefined | unknown, arrs: any) {
        fs.exists(dirUri, function (exists: any) {
            if (!exists) {
                fs.mkdirSync(dirUri);
            }
        });
        fetch(url, {
            method: 'GET',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            headers: { 'Content-Type': 'application/octet-stream' },
        }).then((res: any) => res.buffer()).then((_: any) => {
            fs.writeFile(dirUri + "/cache.zip", _, "binary", function (err: any) {
                if (err) {
                    vscode.window.showErrorMessage('下载Libary文件失败' + err);
                }
                else {
                    LibraryConfig.handleFile(dirUri + "/cache.zip", dirUri, arrs);
                };
            });
        });
    }
    static handleFile(filepath: string, dirPath: any, arrs: any) {
        const zip = new streamZip({
            file: filepath,
            storeEntries: true
        });
        fs.exists(filepath, (exists: boolean) => {
            if (exists) {
                zip.on('ready', () => {
                    zip.extract(null, dirPath, (err: any, count: any) => {
                        if (err) {
                            vscode.window.showErrorMessage('LLScriptHelper-Libary下载失败，请检查网络');
                        } else {
                            fs.unlinkSync(filepath);
                            vscode.window.showInformationMessage('LLScriptHelper-Library 版本：' + arrs.version);
                            vscode.workspace.getConfiguration().update("LLScriptHelper.version", arrs.version, true);
                            vscode.workspace.getConfiguration().update("Lua.workspace.library", [dirPath + "/Lua"], true);
                            vscode.window.showInformationMessage('LLScriptHelper-Library 已更新');
                        }
                        zip.close();
                    });
                });
            } else {
                vscode.window.showErrorMessage('Library下载失败，请检查网络');
            }
        });
    }

}
async function delDir(path: string | unknown) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach((file: any, index: any) => {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                delDir(curPath); //递归删除文件夹
            } else {
                fs.unlinkSync(curPath); //删除文件
            }
        });
        fs.rmdirSync(path);
    }
}