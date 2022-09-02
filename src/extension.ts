/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-08-26 17:53:20
 */
import * as vscode from "vscode";
import { WorkspaceHandler } from "./handler/WorkSpaceHandler";
import { ConfigPanel } from "./panels/ConfigPanel";
import { DocsPanel } from "./panels/DocsPanel";
async function activate(context: vscode.ExtensionContext) {
  // show config panel
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.llseaids.config", (uri) => {
      ConfigPanel.render(context.extensionUri);
    }),
    vscode.commands.registerCommand("extension.llseaids.docs", () => {
      DocsPanel.render();
    })
  );
  var sourceUrl = vscode.workspace
    .getConfiguration()
    .get("extension.llseaids.sourceUrl");
  // may first time run
  var libraryPath = vscode.workspace
    .getConfiguration()
    .get("extension.llseaids.libraryPath");
  var javascriptApiPath = vscode.workspace
    .getConfiguration()
    .get("extension.llseaids.javascriptApiPath");
  if (
    sourceUrl === null ||
    libraryPath === null ||
    javascriptApiPath === null
  ) {
    vscode.commands.executeCommand("extension.llseaids.config");
  }
  // init handler
  new WorkspaceHandler(context).snippetCompletion().onCreateFile();
}

exports.deactivate = function () {};

exports.activate = activate;
