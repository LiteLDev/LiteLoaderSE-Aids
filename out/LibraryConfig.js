"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryConfig = void 0;
const fs = require('fs');
const vscode = require("vscode");
const fetch = require('node-fetch');
const streamZip = require("node-stream-zip");
class LibraryConfig {
    run(arrs) {
        if (vscode.workspace.getConfiguration().get("LXLDevHelper.LibraryPath") !== null && vscode.workspace.getConfiguration().get("LXLDevHelper.LibraryPath") !== "") {
            const ver = vscode.workspace.getConfiguration().get("LXLDevHelper.version");
            vscode.window.showInformationMessage(arrs.notice, "更新").then(function (t) {
                if (t === "更新") {
                    vscode.window.showInformationMessage('开始更新Library：' + ver + " -> " + arrs.version);
                    new LibraryConfig().downloadFile(arrs.download, vscode.workspace.getConfiguration().get("LXLDevHelper.LibraryPath"), arrs);
                }
            });
        }
        else {
            vscode.window.showErrorMessage("未配置Library的存放地址", "使用默认", "自定义").then(function (t) {
                if (t === "使用默认") {
                    const libary = vscode.extensions.getExtension('moxicat.LXLDevHelper');
                    const path = (libary === null || libary === void 0 ? void 0 : libary.extensionPath) + "/Library";
                    vscode.workspace.getConfiguration().update("LXLDevHelper.LibraryPath", path, true).then(function () {
                        vscode.window.showInformationMessage('开始首次配置Library：' + path);
                        new LibraryConfig().downloadFile(arrs.download, path, arrs);
                    });
                }
                else if (t === "自定义") {
                    vscode.window.showOpenDialog({
                        title: '选择自定义Library的存放地址',
                        canSelectFolders: true,
                        canSelectMany: false
                    }).then(function (uri) {
                        if (uri !== undefined) {
                            var uris = uri[0].fsPath + "/Library";
                            vscode.workspace.getConfiguration().update("LXLDevHelper.LibraryPath", uris, true).then(function () {
                                vscode.window.showInformationMessage('开始首次配置Library：' + uris);
                                new LibraryConfig().downloadFile(arrs.download, uris, arrs);
                            });
                        }
                    });
                }
            });
        }
    }
    downloadFile(url, dirUri, arrs) {
        fs.exists(dirUri, function (exists) {
            if (!exists) {
                fs.mkdirSync(dirUri);
            }
        });
        fetch(url, {
            method: 'GET',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            headers: { 'Content-Type': 'application/octet-stream' },
        }).then((res) => res.buffer()).then((_) => {
            fs.writeFile(dirUri + "/cache.zip", _, "binary", function (err) {
                if (err) {
                    vscode.window.showErrorMessage('下载Libary文件失败' + err);
                }
                else {
                    LibraryConfig.handleFile(dirUri + "/cache.zip", dirUri, arrs);
                }
                ;
            });
        });
    }
    static handleFile(filepath, dirPath, arrs) {
        const zip = new streamZip({
            file: filepath,
            storeEntries: true
        });
        fs.exists(filepath, (exists) => {
            if (exists) {
                zip.on('ready', () => {
                    zip.extract(null, dirPath, (err, count) => {
                        if (err) {
                            vscode.window.showErrorMessage('LXLDevHelper-Libary下载失败，请检查网络');
                        }
                        else {
                            fs.unlinkSync(filepath);
                            vscode.window.showInformationMessage('LXLDevHelper-Library 版本：' + arrs.version);
                            vscode.workspace.getConfiguration().update("LXLDevHelper.version", arrs.version, true);
                            vscode.workspace.getConfiguration().update("Lua.workspace.library", [dirPath + "/Lua"], true);
                            vscode.window.showInformationMessage('LXLDevHelper-Library 已更新');
                        }
                        zip.close();
                    });
                });
            }
            else {
                vscode.window.showErrorMessage('Library下载失败，请检查网络');
            }
        });
    }
}
exports.LibraryConfig = LibraryConfig;
//# sourceMappingURL=LibraryConfig.js.map