import { logger, OutputEvent, StoppedEvent } from "@vscode/debugadapter";
import { EventEmitter } from "events";
import { FileAccessor } from "../utils/FileAccessor";
import * as vscode from "vscode";
import { LLseDebugSession } from "./LLseDebugSession";
import "child_process";
import { exec } from "child_process";
export class LLseRuntime extends EventEmitter {
  private session: LLseDebugSession;
  constructor(private fileAccessor: FileAccessor, session: LLseDebugSession) {
    super();
    this.session = session;
  }
  public logout(msg: string) {
    // output to debug console
    this.session.sendEvent(new OutputEvent(msg));
  }
  public static execCommand(cmd: string) {
    vscode.window.terminals.forEach((t) => {
      if (t.name.indexOf("LLSE") >= 0) {
        t.sendText(cmd);
      }
    });
  }
  public async start(program: string, stopOnEntry: boolean): Promise<void> {
    const t = vscode.window.createTerminal({
      name: "LLSE",
      shellPath: "D:\\CookieClub\\LiteLoader\\bedrock_server_mod.exe",
      cwd: "D:\\CookieClub\\LiteLoader",
    });
    t.show();
  }
}
