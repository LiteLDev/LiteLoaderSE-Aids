import { LoggingDebugSession } from "@vscode/debugadapter";
import * as vscode from "vscode";
export class BdsDebugSession extends LoggingDebugSession {
  public constructor() {
    super();
    vscode.window.showErrorMessage("debuger init3333333");
    var t = vscode.window.createTerminal({
      name: "test",
      shellPath: "D:CookieClub\\LiteLoader\\bedrock_server_mod.exe",
    });
    t.show();
    t.processId.then((pid) => {
        // 同步进程
        vscode.debug.activeDebugConsole.appendLine("pid: " + pid);
    });
    
  }
}
