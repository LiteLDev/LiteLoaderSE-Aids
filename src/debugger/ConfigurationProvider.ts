import * as vscode from "vscode";
import { DebugConfiguration, WorkspaceFolder } from "vscode";

export function llseDynamicConfiguration(): vscode.Disposable {
  var t = vscode.debug.registerDebugConfigurationProvider(
    "llse",
    {
      provideDebugConfigurations(
        folder: vscode.WorkspaceFolder | undefined
      ): vscode.ProviderResult<DebugConfiguration[]> {
        return [
          {
            name: "启动",
            request: "launch",
            type: "llse",
            program: "${file}",
          },
        ];
      },
    },
    vscode.DebugConfigurationProviderTriggerKind.Dynamic
  );
  return t;
}
