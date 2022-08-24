import * as vscode from 'vscode';
import fs = require('fs');
import { isNotEmpty } from '../utils/SomeUtil';
import { ConfigPanel } from '../panels/ConfigPanel';
export class LibraryHandler {

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
            
        });
    }
    public static selectLibrary(callback: (path: String | any) => any): any {
        // 选择目录
        var back = vscode.window.showOpenDialog({
            canSelectFiles: false,
            canSelectFolders: true,
            canSelectMany: false,
            openLabel: '选择库存放目录'
        });

        back.then(uri => {
            if (uri === undefined || uri === null) {
                vscode.window.showWarningMessage('请重新选择库存放目录 !');
                return null;
            }
            callback(uri[0].fsPath);
        });
    }
    public static getLibraryPath(callback: (path: String | any) => any): String | any {
        var path = vscode.workspace.getConfiguration().get('LLScriptHelper.libraryPath');
        if (isNotEmpty(path)) {
            callback(path);
            return;
        }
        path = this.selectLibrary((path) => {
            callback(path);
            vscode.workspace.getConfiguration().update('LLScriptHelper.libraryPath', path, vscode.ConfigurationTarget.Global).then(() => {
                ConfigPanel._setDefaultConfig();
            });
        });
    }
}