/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import fs = require('fs');
const request = require('request');
import { isNotEmpty, downloadFile, selectLibrary, unzipAsync, findFileMatchSync } from '../utils/SomeUtil';
import { ConfigPanel } from '../panels/ConfigPanel';
export class LibraryHandler {
    static output = vscode.window.createOutputChannel('LLScriptHelper');
    public static libraryPath = vscode.workspace.getConfiguration().get('LLScriptHelper.libraryPath');
    public static getLibrary(libraryUrl: String) {

        // 链接合法性检查
        if (!isNotEmpty(libraryUrl) || (!libraryUrl.startsWith('http://') && !libraryUrl.startsWith('https://'))) {
            vscode.window.showErrorMessage('请输入合法的url');
            return;
        }
        // 更新配置文件
        vscode.workspace.getConfiguration().update('LLScriptHelper.libraryUrl', libraryUrl, vscode.ConfigurationTarget.Global);
        ConfigPanel._updateLibraryUrl(libraryUrl);
        this.getLibraryPath((path) => {
            if (path === null || path === undefined || fs.existsSync(path) === false) {
                vscode.window.showErrorMessage('库存放地址配置错误');
                return;
            }
            // 开始获取清单
            ConfigPanel._changeProgress(true);
            LibraryHandler.output.appendLine('开始获取清单');
            LibraryHandler.output.appendLine(libraryUrl.toString());
            request(libraryUrl, { json: true }, (err: any, res: any, body: any) => {
                LibraryHandler.output.show();
                if (err) {
                    ConfigPanel._changeProgress(false);
                    LibraryHandler.output.appendLine('获取清单失败');
                    LibraryHandler.output.appendLine(err);
                    return;
                }
                if (body.version === undefined) {
                    this.output.appendLine('清单无效');
                    vscode.window.showErrorMessage('补全库配置失败');
                    return;
                }
                var library = body.library;
                var callbackJs = undefined;
                LibraryHandler.output.appendLine('获取到清单内容 \nName: ' + body.name + ' Version: ' + body.version + ' author: ' + body.author + ' desc: ' + body.description);
                if (library.javascript === undefined || library.javascript === null) {
                    LibraryHandler.output.appendLine('没有找到javascript库信息');
                } else {
                    LibraryHandler.output.appendLine('开始配置Lirary: javascript');
                    new LibraryHandler().handleJavaScript(library.javascript);
                }
                if (library.lua === undefined || library.lua === null) {
                    //LibraryHandler.output.appendLine('没有找到lua库信息');
                } else {
                    // TODO: 对lua的支持
                }
            });
        });
    }
    public handleJavaScript(obj: { index: String, download_url: String }) {
        console.log(obj.index);
        downloadFile(obj.download_url, LibraryHandler.libraryPath, (success, msg) => {
            if (!success) {
                LibraryHandler.output.appendLine('javascript库下载失败');
                LibraryHandler.output.appendLine(msg);
                vscode.window.showErrorMessage('补全库配置失败');
                return;
            }
            LibraryHandler.output.appendLine('javascript库下载成功');
            var filePath = msg;
            unzipAsync(filePath, LibraryHandler.libraryPath + '/JS', (success, msg) => {
                fs.unlink(filePath,()=>{});
                if (!success) {
                    LibraryHandler.output.appendLine(msg);
                    vscode.window.showErrorMessage('javascript库解压失败');
                    return;
                }
                LibraryHandler.output.appendLine('javascript库解压成功');
                var apiPath = findFileMatchSync(msg, obj.index.toString());
                if (apiPath === null) {
                    vscode.window.showErrorMessage('找不到指定的库');
                    return;
                }
                LibraryHandler.output.appendLine('找到Api文件' + apiPath);
                vscode.workspace.getConfiguration().update('LLScriptHelper.javascriptApiPath', apiPath.replace('\\', "/"), vscode.ConfigurationTarget.Global).then(() => {
                    LibraryHandler.output.appendLine('javascript补全库配置成功');
                    LibraryHandler.output.hide();
                    ConfigPanel._changeProgress(false);
                    vscode.window.showInformationMessage('JS补全库配置成功');
                });
            });
        });
    }


    public static getLibraryPath(callback: (path: String | any) => any): String | any {
        var path = vscode.workspace.getConfiguration().get('LLScriptHelper.libraryPath');
        if (isNotEmpty(path)) {
            callback(path);
            return;
        }
        path = selectLibrary((path) => {
            callback(path);
            vscode.workspace.getConfiguration().update('LLScriptHelper.libraryPath', path, vscode.ConfigurationTarget.Global).then(() => {
                ConfigPanel._updateLibraryPath(path);
                LibraryHandler.libraryPath = path;
            });
        });
    }
}