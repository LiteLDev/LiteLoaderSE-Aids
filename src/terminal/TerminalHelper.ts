/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-05 20:40:18
 * @LastEditTime: 2022-09-05 23:53:55
 */
import * as nls from "vscode-nls";
import * as vscode from "vscode";
import "./TerminalConst";
import { TerminalKeys, TerminalState } from "./TerminalConst";
import { checkBDSPath, getBDSPath } from "../utils/WorkspaceUtil";
const localize = nls.loadMessageBundle();
export class TerminalHelper {
	static terminal: vscode.Terminal | undefined;
	static context: vscode.ExtensionContext;
	constructor(context: vscode.ExtensionContext) {
		TerminalHelper.context = context;
		this.disposeTerminal();
		context.workspaceState.update(TerminalKeys.STATE, TerminalState.STOPED);
		context.subscriptions.push(
			vscode.commands.registerCommand("extension.llseaids.runconsole", () => {
				this.runConsole();
			})
		);
	}

	runConsole() {
		let state = TerminalHelper.context.workspaceState.get(TerminalKeys.STATE);
		switch (state) {
			case TerminalState.OPENED:
				const already_open_message = localize(
					"terminal.already_open.message",
					"你已经打开过一个终端了！"
				);
				const already_open_button = localize(
					"terminal.already_open.button",
					"我知道了"
				);
				vscode.window.showErrorMessage(
					already_open_message,
					already_open_button
				);
				break;
			case TerminalState.CRASHED:
				const crashed_message = localize(
					"terminal.crashed.message",
					"是否重置上一次崩溃的终端"
				);
				const crashed_button_yes = localize(
					"terminal.crashed.button_yes",
					"好"
				);
				const crashed_button_no = localize(
					"terminal.crashed.button_no",
					"不好"
				);
				vscode.window
					.showWarningMessage(
						crashed_message,
						crashed_button_yes,
						crashed_button_no
					)
					.then((value) => {
						if (value === crashed_button_yes) {
							this.disposeTerminal();
						}
						this.createTerminal();
					});

				break;
			case TerminalState.STOPED:
				this.createTerminal();
			default:
				break;
		}
	}
	createTerminal() {
		const shellPath = getBDSPath();
	}

	disposeTerminal() {
		TerminalHelper.terminal = undefined;
		vscode.window.terminals.forEach((terminal) => {
			if (terminal.name === TerminalKeys.NAME) {
				terminal.sendText("stop");
				terminal.dispose();
			}
		});
	}
}
