"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unzip = exports.downloadFile = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const vscode = require("vscode");
const fs = require('fs');
const fetch = require("node-fetch");
const streamZip = require("node-stream-zip");
//下载文件
function downloadFile(url, path, version) {
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/octet-stream' },
    }).then((res) => res.buffer()).then((_) => {
        fs.writeFile(path, _, "binary", function (err) {
            if (err) {
                vscode.window.showErrorMessage('下载文件失败' + err);
            }
            else {
                console.log("download success");
                unzip(path, version);
            }
            ;
        });
    });
}
exports.downloadFile = downloadFile;
function unzip(zippath, version) {
    const zip = new streamZip({
        file: zippath,
        storeEntries: true
    });
    fs.exists(zippath, (exists) => {
        if (exists) {
            zip.on('ready', () => {
                zip.extract(null, vscode.workspace.rootPath + '', (err, count) => {
                    if (err) {
                        vscode.window.showErrorMessage('配置失败！\n原因：LXLDevHelper下载失败，请检查网络');
                    }
                    else {
                        fs.unlinkSync(zippath);
                        vscode.window.showInformationMessage('配置成功!');
                        vscode.window.showInformationMessage('LXLDevHelper版本：' + version);
                    }
                    zip.close();
                });
            });
        }
        else {
            vscode.window.showErrorMessage('配置失败！\n原因：LXLDevHelper下载失败，请检查网络');
        }
    });
}
exports.unzip = unzip;
//# sourceMappingURL=utils.js.map