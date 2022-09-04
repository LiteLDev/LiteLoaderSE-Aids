/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-04 14:29:40
 * @LastEditTime: 2022-09-04 14:48:10
 */
import { ChildProcess, exec } from "child_process";
import * as vscode from "vscode";
import * as Net from "net";
export class LLDebugAdapterDescriptorFactory
	implements vscode.DebugAdapterDescriptorFactory
{
	createDebugAdapterDescriptor(
		session: vscode.DebugSession,
		executable: vscode.DebugAdapterExecutable | undefined
	): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
		return new Promise((resolve, reject) => {
			let socket = new Net.Socket();
			let child: ChildProcess;
			vscode.window.showErrorMessage("okk debug");

			socket.on("connect", () => {
				if (socket.remotePort && socket.remoteAddress) {
					resolve(
						new vscode.DebugAdapterServer(
							socket.remotePort,
							socket.remoteAddress
						)
					);
				} else {
					reject(new Error("Connection to debugger could not be resolved"));
				}
			});
			socket.on("error", (err) => {
				if (child) {
					child.kill();
				}
				reject(err);
			});
			var execPath = "a.exe";
			resolve(new vscode.DebugAdapterExecutable(execPath));
			child = exec(execPath, function (error, stdout, stderr) {
				if (error) {
					reject(error);
					return console.error(error);
				}
			});
			if (child.stdout === null) {
				return;
			}
			child.stdout.on("data", (data) => {
				console.log(data);
			});
		});
	}
	dispose() {
		// Nothing to do
	}
}
