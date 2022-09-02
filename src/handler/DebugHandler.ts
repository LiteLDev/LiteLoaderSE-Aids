import * as vscode from "vscode";

class DebugHandler {
  private bdsPath: string | undefined;
  constructor(bdsPath: string) {
    this.bdsPath = bdsPath;
  }

  public runConsole(): DebugHandler {
    var a = 0;
    return this;
  }
}