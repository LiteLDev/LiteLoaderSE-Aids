/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-13 10:56:15
 * @LastEditTime: 2022-09-15 23:05:55
 */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-13 10:56:15
 * @LastEditTime: 2022-09-13 11:38:44
 */
import * as fs from "fs";
import StreamZip = require("node-stream-zip");
import * as vscode from "vscode";

/**
 * 同步查找文件匹配
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
		zip.extract(null, target, (err, count) => {
			zip.close();
			callback(true, err ? "Extract error" : `Extracted ${count} entries`);
			return;
		});
	});
	zip.on("error", (err) => {
		callback(false, err);
	});
}

/**
 * 调起选择目录
 * @param  {string} title
 */
export function selectFolder(title: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const USER_HOME = process.env.HOME || process.env.USERPROFILE;
		// 选择目录
		var back = vscode.window.showOpenDialog({
			canSelectFiles: false,
			canSelectFolders: true,
			canSelectMany: false,
			openLabel: title,
			defaultUri: vscode.Uri.file(USER_HOME as string),
		});

		back.then((uri) => {
			if (uri === undefined || uri === null) {
				reject("NULLABLE");
				return;
			}
			resolve(uri[0].fsPath);
		});
	});
}
