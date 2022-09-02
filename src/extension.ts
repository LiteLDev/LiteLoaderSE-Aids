/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:36
 * @LastEditTime: 2022-08-26 17:53:20
 */
import * as vscode from "vscode";
import { ProviderResult } from "vscode";
import { activateBdsDebug } from "./debugger/activateBDSDebug";
import { BdsDebugSession } from "./debugger/BdsDebugSession";
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
    }),
    vscode.commands.registerCommand("extension.llseaids.runconsole", () => {
      vscode.window.showInformationMessage("okk");
      vscode.debug.startDebugging(undefined, {
        type: 'llse',
        name: 'Run File',
        request: 'launch',
        program: "C\:\\Users\\moix\\Desktop\\rum.bat"
      },
        { noDebug: true }
      );
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
  // init debugger
  activateBdsDebug(context, new DebugAdapterExecutableFactory());
}

exports.deactivate = function () {};

exports.activate = activate;

// 构建调试器
class DebugAdapterExecutableFactory
  implements vscode.DebugAdapterDescriptorFactory
{
  // The following use of a DebugAdapter factory shows how to control what debug adapter executable is used.
  // Since the code implements the default behavior, it is absolutely not neccessary and we show it here only for educational purpose.

  createDebugAdapterDescriptor(
    _session: vscode.DebugSession,
    executable: vscode.DebugAdapterExecutable | undefined
  ): ProviderResult<vscode.DebugAdapterDescriptor> {
    // param "executable" contains the executable optionally specified in the package.json (if any)

    // use the executable specified in the package.json if it exists or determine it based on some other information (e.g. the session)
    if (!executable) {
      const command = "absolute path to my DA executable";
      const args = ["some args", "another arg"];
      const options = {
        cwd: "working directory for executable",
        env: { envVariable: "some value" },
      };
      executable = new vscode.DebugAdapterExecutable(command, args, options);
    }
    new BdsDebugSession();
    // make VS Code launch the DA executable
    return executable;
  }
}
