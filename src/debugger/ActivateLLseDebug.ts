import * as vscode from "vscode";
import { DebugConfiguration } from "vscode";
import { llseDynamicConfiguration } from "./ConfigurationProvider";
import { InlineDebugAdapterFactory } from "./InlineDebugAdapterFactory";

export function activateLLseDebug(context: vscode.ExtensionContext) {
  // command
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.llseaids.runconsole", () => {
      vscode.window.showInformationMessage("okk");
    })
  );

  // debugger dynamic config
  context.subscriptions.push(llseDynamicConfiguration());

  var factory = new InlineDebugAdapterFactory();
  context.subscriptions.push(
    vscode.debug.registerDebugAdapterDescriptorFactory("llse", factory)
  );
}
