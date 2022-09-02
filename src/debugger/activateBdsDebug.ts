import * as vscode from "vscode";
import { ProviderResult } from "vscode";
import { BdsDebugSession } from "./BdsDebugSession";
// 激活调试器相关
export function activateBdsDebug(
  context: vscode.ExtensionContext,
  factory?: vscode.DebugAdapterDescriptorFactory
) {
  vscode.window.showErrorMessage("debuger init");
  if (!factory) {
    factory = new InlineDebugAdapterFactory();
  }
  context.subscriptions.push(
    vscode.debug.registerDebugAdapterDescriptorFactory("llse", factory)
  );
  if ("dispose" in factory) {
    context.subscriptions.push(factory);
  }
}

class InlineDebugAdapterFactory
  implements vscode.DebugAdapterDescriptorFactory
{
  createDebugAdapterDescriptor(
    _session: vscode.DebugSession
  ): ProviderResult<vscode.DebugAdapterDescriptor> {
    return new vscode.DebugAdapterInlineImplementation(new BdsDebugSession());
  }
}
