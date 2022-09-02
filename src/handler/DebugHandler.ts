import * as vscode from "vscode";

class DebugHandler {
  private bdsPath: string | undefined;
  constructor(bdsPath: string) {
    this.bdsPath = bdsPath;
  }

  public runConsole(): DebugHandler {
    const provider = vscode.debug.registerDebugConfigurationProvider(
    return this;
  }
}
