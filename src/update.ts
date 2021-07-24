/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
const fs = require('fs');
import https = require('https');
import { apiHost } from './extension';
const fetch = require("node-fetch");
import streamZip = require('node-stream-zip');
const paths = vscode.workspace.rootPath;
const marked = require("marked");

export function update(path: string) {
    fs.readFile(path, 'utf8', (err: any, data: any) => {
        if (err) {
            vscode.window.showErrorMessage('读取本地版本失败');
        } else {
            var arr = JSON.parse(data);
            if (arr.version !== undefined) {
                //请求Api
                let req = https.request(apiHost, (res: any) => {
                    let resStr: string = "";
                    res.on("data", (str: string) => {
                        resStr += str;
                    });
                    req.on('error', error => {
                        vscode.window.showErrorMessage('获取地址出现错误' + error);
                    });
                    res.on("end", () => {
                        //解析 json
                        var cloud = JSON.parse(resStr);
                        if (cloud.version != arr.version) {
                            vscode.window.showQuickPick(
                                [
                                    "确定更新",
                                    "取消操作"
                                ],
                                {
                                    canPickMany: false,
                                    ignoreFocusOut: true,
                                    title: "您确定更新项目吗?",
                                    placeHolder: "LXLDevHelper当前版本：" + arr.version + "最新版本：" + cloud.version
                                }
                            ).then(function (msg) {
                                // eslint-disable-next-line eqeqeq
                                if (msg == "确定更新") {
                                    downloadFile(cloud.download_url, paths + '/cache.zip', arr.version, cloud.version);
                                }
                            });//vscode
                        } else {
                            vscode.window.showInformationMessage('LXLDevHelper版本：' + arr.version);
                            vscode.window.showInformationMessage('当前版本一致无需更新');
                        }
                    });
                });
                req.end();
            } else {
                vscode.window.showErrorMessage('读取本地版本失败');
            }//version

        }
    });//fs
}


//下载文件
function downloadFile(url: string, path: string, version: string, newversion: string) {
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/octet-stream' },
    }).then((res: any) => res.buffer()).then((_: any) => {
        fs.writeFile(path, _, "binary", function (err: any) {
            if (err) {
                vscode.window.showErrorMessage('下载文件失败' + err);
            }
            else {
                console.log("download success");
                unzip(path, version, newversion);
            };
        });
    });
}

function unzip(zippath: string, version: string, newversion: string) {
    const zip = new streamZip({
        file: zippath,
        storeEntries: true,
    });
    fs.exists(zippath, (exists: boolean) => {
        if (exists) {
            zip.on('ready', () => {
                zip.extract(null, vscode.workspace.rootPath + '', (err: any, count: any) => {
                    if (err) {
                        vscode.window.showErrorMessage('配置失败！\n原因：LXLDevHelper下载失败，请检查网络');
                    } else {
                        fs.unlinkSync(zippath);
                        vscode.window.showInformationMessage('LXLDevHelper版本：' + version + ' -> ' + newversion);
                        vscode.window.showInformationMessage('更新成功!');
                    }
                    zip.close();
                });
            });
        } else {
            vscode.window.showErrorMessage('配置失败！\n原因：LXLDevHelper下载失败，请检查网络');
        }
    });
}
export function showed(context: vscode.ExtensionContext) {
       let reqs = https.request('https://raw.githubusercontent.com/moxicode/LXLDevHelper/master/README.md', (res:any) =>{
           let resStr:string = "";
           res.on("data", (str:string) => {
               resStr += str;
           });
           reqs.on('error', error => {
               vscode.window.showErrorMessage('获取地址出现错误'+error);
             });
           res.on("end", () => {
               const html = marked(resStr);
               var planes = vscode.window.createWebviewPanel(
                   "update",
                   "LXLDevHelper",
                   vscode.ViewColumn.One,
                   {
                       retainContextWhenHidden: true,
                       enableScripts: true
                   }
               );
               planes.webview.html = html;
   });
   });
       reqs.end();   
    }