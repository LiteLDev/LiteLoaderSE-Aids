/* eslint-disable @typescript-eslint/naming-convention */
import https = require('https');
import http = require('http');
import * as vscode from 'vscode';
import streamZip = require('node-stream-zip');
import { apiHost } from './extension';
const fs = require('fs');
const fetch = require("node-fetch");
const marked = require("marked");
export function configure(libaryPath: string, type: boolean) {

	console.info('2' + type);
	let req = https.request(apiHost, (res: any) => {
		let resStr: string = "";
		res.on("data", (str: string) => {
			resStr += str;
		});
		req.on('error', error => {
			vscode.window.showErrorMessage('获取地址出现错误' + error);
		});
		res.on("end", () => {
			var arr = JSON.parse(resStr);
			if (type) {
				fs.readFile(libaryPath + '\\version.json', 'utf8', (err: any, data: any) => {
					if (err) {
						vscode.window.showErrorMessage('读取本地版本失败');
					} else {
						var arrs = JSON.parse(data);
						if (arr.version !== undefined) {
							if (checkUp(arr.version, arrs.version)) {
								delDir(libaryPath + '\\libary');
								downloadFile(arr.download_url, libaryPath + '\\cache.zip', arr.version, arrs.version, false, libaryPath);
							}
						}
					}
				});

			} else {
				vscode.window.showInformationMessage('是否要配置全局LXLDevHelper依赖项？', '配置').then(function (msg) {
					if (msg === '配置') {
						downloadFile(arr.download_url, libaryPath + '\\cache.zip', arr.version, '', true, libaryPath);
					} else {
						vscode.window.showWarningMessage('将在下一次启动时询问');
					}
				});
			}
		});
	});
	req.end();

}



//下载文件
function downloadFile(url: string, path: string, version: string, localversion: string, type: boolean, libaryPath: string) {
	console.info(url);
	fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/octet-stream' },
	}).then((res: any) => res.buffer()).then((_: any) => {
		fs.writeFile(path, _, "binary", function (err: any) {
			if (err) {
				vscode.window.showErrorMessage('下载Libary文件失败' + err);
			}
			else {
				unzip(path, version, localversion, type, libaryPath);
			};
		});
	});
}

function unzip(zippath: string, version: string, localversion: string, type: boolean, libaryPath: string) {
	const zip = new streamZip({
		file: zippath,
		storeEntries: true
	});
	fs.exists(zippath, (exists: boolean) => {
		if (exists) {
			zip.on('ready', () => {
				zip.extract(null, libaryPath, (err: any, count: any) => {
					if (err) {
						vscode.window.showErrorMessage('LXLDevHelper-Libary下载失败，请检查网络');
					} else {
						fs.unlinkSync(zippath);
						if (type) {
							vscode.window.showInformationMessage('LXLDevHelper-Libary 版本：' + version);
							vscode.window.showInformationMessage('配置LXLDevHelper-Libary 成功');
						} else {
							vscode.window.showInformationMessage('LXLDevHelper-Libary 版本：' + localversion + ' -> ' + version);
							vscode.window.showInformationMessage('LXLDevHelper-Libary 已更新','更新记录').then(function(t) {
								if(t === '更新记录'){
									let reqs = https.request('https://cdn.jsdelivr.net/gh/moxicode/LXLDevHelper-Libary@master/UPDATE.md', (res:any) =>{
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
							});
						}
					}
					zip.close();
				});
			});
		} else {
			vscode.window.showErrorMessage('LXLDevHelper-Libary下载失败，请检查网络');
		}
	});
}

function delDir(path: string) {
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

function checkUp(version: any, now_version: any) {
	if (version !== now_version) {
		return true;
	} else {
		return false;
	}
}