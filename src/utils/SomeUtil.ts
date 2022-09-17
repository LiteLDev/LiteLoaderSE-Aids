/* eslint-disable @typescript-eslint/naming-convention */
import fs = require("fs");
import StreamZip = require("node-stream-zip");
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
