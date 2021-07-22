/* eslint-disable @typescript-eslint/naming-convention */
import https = require('https');
import http = require('http');
import * as vscode from 'vscode';
import streamZip = require('node-stream-zip');
import { apiHost } from './extension';
const fs = require('fs');
const fetch = require("node-fetch");
const path = vscode.workspace.rootPath;
export function configure() {
     //请求Api
    let req = https.request(apiHost, (res:any) =>{
        let resStr:string = "";
        res.on("data", (str:string) => {
            resStr += str;
        });
        req.on('error', error => {
            vscode.window.showErrorMessage('获取地址出现错误'+error);
          });
        res.on("end", () => {
            //解析 json
            var arr= JSON.parse(resStr);
            downloadFile(arr.download_url,path+'/cache.zip',arr.version);
                    
});
});
    req.end();   
 }



 //下载文件
function downloadFile(url:string,path:string,version:string){
	fetch(url,   {
			method: 'GET',
			headers: { 'Content-Type': 'application/octet-stream' },
	}).then((res:any) => res.buffer()).then((_:any)=>{
	  fs.writeFile(path, _, "binary", function (err:any) {
					if (err) {
						vscode.window.showErrorMessage('下载文件失败'+err);
					}
					else {
						console.log("download success");
						unzip(path,version);
					};
		});
	});
}

function unzip(zippath:string,version:string) {
	const zip = new streamZip({
		file: zippath,
		storeEntries: true
	});
	fs.exists(zippath, (exists:boolean) => {
		if(exists){
zip.on('ready', () => {
	zip.extract(null, vscode.workspace.rootPath+'', (err:any, count:any) => {
		if(err){
			vscode.window.showErrorMessage('配置失败！\n原因：LXLDevHelper下载失败，请检查网络');
		}else{
			fs.unlinkSync(zippath);
			vscode.window.showInformationMessage('LXLDevHelper版本：'+version);
			vscode.window.showInformationMessage('配置成功!');
		}
		zip.close();
	});
});
		}else{
			vscode.window.showErrorMessage('配置失败！\n原因：LXLDevHelper下载失败，请检查网络');
		}	
	});
}
