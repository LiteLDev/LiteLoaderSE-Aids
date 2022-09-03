/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-08-26 17:53:20
 */
import * as vscode from "vscode";
import { activateLLseDebug } from "./debugger/ActivateLLseDebug";
import { WorkspaceHandler } from "./handler/WorkSpaceHandler";

async function activate(context: vscode.ExtensionContext) {
  // init handler
  new WorkspaceHandler(context)
    .init(context)
    .snippetCompletion()
    .onCreateFile();
  // init debugger
  activateLLseDebug(context); // 寄生于vscode的debugger
}

exports.deactivate = function () {};

exports.activate = activate;
