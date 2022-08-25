/* eslint-disable @typescript-eslint/naming-convention */
import fs = require('fs');
import * as vscode from 'vscode';
import { LibraryHandler } from '../handler/LibraryHandler';
import { randomUUID } from 'crypto';
import fetch from 'node-fetch';

// 空判断
export function isNotEmpty(obj: any): boolean {
  return (obj !== null && obj !== '' && obj !== undefined && obj !== 'undefined' && obj !== 'null');
}

// 下载文件
export function downloadFile(url: any, path: any, callback: (success: Boolean, msg: any) => void) {
  LibraryHandler.output.appendLine('开始下载文件');
  LibraryHandler.output.appendLine(url);
  var filePath = path + '/' + randomUUID() + '.zip';
  fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/octet-stream' },
  }).then((res: any) => res.buffer()).then((_: any) => {
    fs.writeFile(filePath, _, "binary", function (err: any) {
      if (err) {
        callback(false, err);
      }
      else {
        callback(true, filePath);
      };
    });
  });
}

export function selectLibrary(callback: (path: String | any) => any): any {
  // 选择目录
  var back = vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
    openLabel: '选择目录'
  });

  back.then(uri => {
    if (uri === undefined || uri === null) {
      vscode.window.showWarningMessage('请重新选择目录 !');
      return null;
    }
    callback(uri[0].fsPath);
  });
}

export function findFileMatchSync(sourceDir: string, rule: string): string | null {
  var files = fs.readdirSync(sourceDir);
  for (var i = 0; i < files.length; i++) {
    var fileName = files[i];
    var filePath = sourceDir + '/' + fileName;
    var stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {
      var result = findFileMatchSync(filePath, rule);
      if (result) {
        return result;
      }
    } else {
      if (filePath.match(rule)) {
        return filePath;
      } else {
        continue;
      }
    }
  }
  return null;
}