/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-08-26 16:57:06
 */
import * as vscode from "vscode";
import { WorkspaceHandler } from "./handler/WorkSpaceHandler";
import { ConfigPanel } from "./panels/ConfigPanel";
import { DocsPanel } from "./panels/DocsPanel";
export function activate(context: vscode.ExtensionContext) {
  // show config panel
  const configCommand = vscode.commands.registerCommand(
    "LLScriptHelper.config",
    () => {
      ConfigPanel.render(context.extensionUri);
    }
  );
  // show docs panel
  const docsCommand = vscode.commands.registerCommand("llseaids.docs", () => {
    DocsPanel.render();
  });
  var sourceUrl = vscode.workspace
    .getConfiguration()
    .get("LLScriptHelper.sourceUrl");
  // may first time run
  var libraryPath = vscode.workspace
    .getConfiguration()
    .get("LLScriptHelper.libraryPath");
  var javascriptApiPath = vscode.workspace
    .getConfiguration()
    .get("LLScriptHelper.javascriptApiPath");
  if (
    sourceUrl === null ||
    libraryPath === null ||
    javascriptApiPath === null
  ) {
    vscode.commands.executeCommand("LLScriptHelper.config");
  }
  // init handler
  new WorkspaceHandler(context).snippetCompletion().onCreateFile();
  context.subscriptions.push(configCommand, docsCommand);
}

exports.deactivate = function () {};
