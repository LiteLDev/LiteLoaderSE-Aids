"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryHandler = void 0;
const vscode = require("vscode");
const fs = require("fs");
const SomeUtil_1 = require("../utils/SomeUtil");
const ConfigPanel_1 = require("../panels/ConfigPanel");
class LibraryHandler {
    static getLibrary(libraryUrl) {
        // 链接合法性检查
        if (!SomeUtil_1.isNotEmpty(libraryUrl) || (!libraryUrl.startsWith('http://') && !libraryUrl.startsWith('https://'))) {
            vscode.window.showErrorMessage('请输入合法的url');
            return;
        }
        // 更新配置文件
        vscode.workspace.getConfiguration().update('LLScriptHelper.libraryUrl', libraryUrl, vscode.ConfigurationTarget.Global);
        ConfigPanel_1.ConfigPanel._updateLibraryUrl(libraryUrl);
        this.getLibraryPath((path) => {
            if (path === null || path === undefined || fs.existsSync(path) === false) {
                vscode.window.showErrorMessage('库存放地址配置错误');
                return;
            }
        });
    }
    static selectLibrary(callback) {
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
    static getLibraryPath(callback) {
        var path = vscode.workspace.getConfiguration().get('LLScriptHelper.libraryPath');
        if (SomeUtil_1.isNotEmpty(path)) {
            callback(path);
            return;
        }
        path = this.selectLibrary((path) => {
            callback(path);
            vscode.workspace.getConfiguration().update('LLScriptHelper.libraryPath', path, vscode.ConfigurationTarget.Global).then(() => {
                ConfigPanel_1.ConfigPanel._setDefaultConfig();
            });
        });
    }
}
exports.LibraryHandler = LibraryHandler;
//# sourceMappingURL=LibraryHandler.js.map