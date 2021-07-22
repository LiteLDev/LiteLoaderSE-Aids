"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const https = require("https");
const vscode = require("vscode");
const streamZip = require("node-stream-zip");
const extension_1 = require("./extension");
const fs = require('fs');
const fetch = require("node-fetch");
const path = vscode.workspace.rootPath;
function configure() {
    //请求Api
    let req = https.request(extension_1.apiHost, (res) => {
        let resStr = "";
        res.on("data", (str) => {
            resStr += str;
        });
        req.on('error', error => {
            vscode.window.showErrorMessage('获取地址出现错误' + error);
        });
        res.on("end", () => {
            //解析 json
            var arr = JSON.parse(resStr);
            downloadFile(arr.download_url, path + '/cache.zip', arr.version);
        });
    });
    req.end();
}
exports.configure = configure;
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
                        vscode.window.showInformationMessage('LXLDevHelper版本：' + version);
                        vscode.window.showInformationMessage('配置成功!');
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
//# sourceMappingURL=configure.js.map