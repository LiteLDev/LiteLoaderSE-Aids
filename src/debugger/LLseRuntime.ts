import { logger } from "@vscode/debugadapter";
import { EventEmitter } from "events";
import { FileAccessor } from "../utils/FileAccessor";
import * as vscode from "vscode";
export class LLseRuntime extends EventEmitter {
  constructor(private fileAccessor: FileAccessor) {
    super();
  }

  public async start(program: string, stopOnEntry: boolean): Promise<void> {
    console.log(program);
  }
}
