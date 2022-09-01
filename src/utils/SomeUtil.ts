/* eslint-disable @typescript-eslint/naming-convention */
import fs = require("fs");
import StreamZip = require("node-stream-zip");
import * as vscode from "vscode";
import { LibraryHandler } from "../handler/LibraryHandler";
import { randomUUID } from "crypto";
import fetch from "node-fetch";

/**
 * 判断是否为空
 * @param obj 需判断的对象
 * @returns boolean 是否是`空`
 */
export function isNotEmpty(obj: any): boolean {
  return (
    obj !== null &&
    obj !== "" &&
    obj !== undefined &&
    obj !== "undefined" &&
    obj !== "null"
  );
}

/**
 * 下载文件
 * @param url 文件Url
 * @param path 下载的路径
 * @param callback 回调函数
 */
export function downloadFile(
  url: any,
  path: any,
  callback: (success: Boolean, msg: any) => void
) {
  LibraryHandler.output.appendLine("开始下载文件");
  LibraryHandler.output.appendLine(url);
  var filePath = path + "/" + randomUUID() + ".zip";
  Promise.race([
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/octet-stream" },
    }),
    new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error("request timeout")), 25000);
    }),
  ])
    .then((res: any) => res.buffer())
    .then((_: any) => {
      fs.writeFile(filePath, _, "binary", function (err: any) {
        if (err) {
          callback(false, err);
        } else {
          callback(true, filePath);
        }
      });
    })
    .catch((msg) => {
      callback(false, msg);
    });
}

/**
 * 选择Library目录
 * @param callback 回调函数
 */
export function selectLibrary(callback: (path: String | any) => any): any {
  // 选择目录
  var back = vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
    openLabel: "选择目录",
  });

  back.then((uri) => {
    if (uri === undefined || uri === null) {
      vscode.window.showWarningMessage("请重新选择目录 !");
      return null;
    }
    callback(uri[0].fsPath);
  });
}

/**
 * 查找文件匹配同步
 * @param sourceDir
 * @param rule
 * @returns
 */
export function findFileMatchSync(
  sourceDir: string,
  rule: string
): string | null {
  var files = fs.readdirSync(sourceDir);
  for (var i = 0; i < files.length; i++) {
    var fileName = files[i];
    var filePath = sourceDir + "/" + fileName;
    var stat = fs.lstatSync(filePath);
    if (stat.isFile()) {
      if (filePath.match(rule)) {
        return filePath;
      } else {
        continue;
      }
    } else {
      var result = findFileMatchSync(filePath, rule);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

/**
 * 异步解压
 * @param filePath 文件路径
 * @param target 文件夹
 * @param callback 回调函数
 */
export function unzipAsync(
  filePath: string,
  target: string,
  callback: (success: Boolean, msg: any) => void
) {
  fs.mkdir(target, (err: any) => {});
  const zip = new StreamZip({
    file: filePath,
    storeEntries: true,
  });
  zip.on("ready", () => {
    unlinkAllFiles(target);
    zip.extract(null, target, (err, count) => {
      LibraryHandler.output.appendLine(
        err ? "Extract error" : `Extracted ${count} entries`
      );
      zip.close();
      callback(true, target);
      return;
    });
  });
  zip.on("error", (err) => {
    callback(false, err);
  });
}

/**
 * 取消链接所有文件
 * @param target 文件夹
 */
export function unlinkAllFiles(target: string) {
  var files = fs.readdirSync(target);
  for (var i = 0; i < files.length; i++) {
    var fileName = files[i];
    var filePath = target + "/" + fileName;
    var stat = fs.lstatSync(filePath);
    if (stat.isFile()) {
      fs.unlinkSync(filePath);
    } else {
      unlinkAllFiles(filePath);
    }
  }
}

/**
 * 获取Js库引入代码
 * @param referencePath
 * @returns string 引入的代码
 */
export function getReferenceHeader(referencePath: string | unknown): string {
  return (
    "//LiteLoaderScript Dev Helper\n/// <reference path=\"" +
    referencePath +
    "\"/> \n\n\n$1"
  );
}
