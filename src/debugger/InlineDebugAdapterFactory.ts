import * as vscode from "vscode";
import { ProviderResult } from "vscode";
import { workspaceFileAccessor } from "../utils/FileAccessor";
import { LLseDebugSession } from "./LLseDebugSession";

export class InlineDebugAdapterFactory
  implements vscode.DebugAdapterDescriptorFactory
{
  createDebugAdapterDescriptor(
    _session: vscode.DebugSession
  ): ProviderResult<vscode.DebugAdapterDescriptor> {
    return new vscode.DebugAdapterInlineImplementation(
      new LLseDebugSession(workspaceFileAccessor)
    );
  }
}
