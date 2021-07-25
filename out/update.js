"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showed = exports.update = void 0;
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
const vscode = require("vscode");
const fs = require('fs');
const https = require("https");
const extension_1 = require("./extension");
const fetch = require("node-fetch");
const streamZip = require("node-stream-zip");
const paths = vscode.workspace.rootPath;
const marked = require("marked");
function update(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            vscode.window.showErrorMessage('读取本地版本失败');
        }
        else {
            var arr = JSON.parse(data);
            if (arr.version !== undefined) {
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
                        var cloud = JSON.parse(resStr);
                        if (cloud.version != arr.version) {
                            vscode.window.showQuickPick([
                                "确定更新",
                                "取消操作"
                            ], {
                                canPickMany: false,
                                ignoreFocusOut: true,
                                title: "您确定更新项目吗?",
                                placeHolder: "LXLDevHelper当前版本：" + arr.version + "最新版本：" + cloud.version
                            }).then(function (msg) {
                                // eslint-disable-next-line eqeqeq
                                if (msg == "确定更新") {
                                    downloadFile(cloud.download_url, paths + '/cache.zip', arr.version, cloud.version);
                                }
                            }); //vscode
                        }
                        else {
                            vscode.window.showInformationMessage('LXLDevHelper版本：' + arr.version);
                            vscode.window.showInformationMessage('当前版本一致无需更新');
                        }
                    });
                });
                req.end();
            }
            else {
                vscode.window.showErrorMessage('读取本地版本失败');
            } //version
        }
    }); //fs
}
exports.update = update;
//下载文件
function downloadFile(url, path, version, newversion) {
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
                unzip(path, version, newversion);
            }
            ;
        });
    });
}
function unzip(zippath, version, newversion) {
    const zip = new streamZip({
        file: zippath,
        storeEntries: true,
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
                        vscode.window.showInformationMessage('LXLDevHelper版本：' + version + ' -> ' + newversion);
                        vscode.window.showInformationMessage('更新成功!');
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
function showed(context) {
    let reqs = https.request('https://cdn.jsdelivr.net/gh/moxicode/LXLDevHelper@master/README.md', (res) => {
        let resStr = "";
        res.on("data", (str) => {
            resStr += str;
        });
        reqs.on('error', error => {
            vscode.window.showErrorMessage('获取地址出现错误' + error);
        });
        res.on("end", () => {
            const html = marked(resStr);
            var planes = vscode.window.createWebviewPanel("update", "LXLDevHelper", vscode.ViewColumn.One, {
                retainContextWhenHidden: true,
                enableScripts: true
            });
            planes.webview.html = html;
        });
    });
    reqs.end();
}
exports.showed = showed;
//# sourceMappingURL=update.js.map