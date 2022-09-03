import {
  LoggingDebugSession,
  StoppedEvent,
  Logger,
  logger,
} from "@vscode/debugadapter";
import * as vscode from "vscode";
import { FileAccessor } from "../utils/FileAccessor";
import { LLseRuntime } from "./LLseRuntime";
import { DebugProtocol } from "@vscode/debugprotocol";
interface ILaunchRequestArguments extends DebugProtocol.LaunchRequestArguments {
  /** An absolute path to the "program" to debug. */
  program: string;
  /** Automatically stop target after launch. If not specified, target does not stop. */
  stopOnEntry?: boolean;
  /** enable logging the Debug Adapter Protocol */
  trace?: boolean;
  /** run without debugging */
  noDebug?: boolean;
  /** if specified, results in a simulated compile error in launch. */
  compileError?: "default" | "show" | "hide";
}

export class LLseDebugSession extends LoggingDebugSession {
  private _runtime: LLseRuntime;
  // 线程ID 不支持多线程
  private static threadID = 1;

  public constructor(fileAccessor: FileAccessor) {
    super();
    vscode.window.showErrorMessage("okk");
    // 初始化运行时
    this._runtime = new LLseRuntime(fileAccessor);
  }
  protected async launchRequest(
    _response: DebugProtocol.LaunchResponse,
    args: ILaunchRequestArguments
  ) {
    logger.setup(
      args.trace ? Logger.LogLevel.Verbose : Logger.LogLevel.Stop,
      false
    );
    await this._runtime.start(args.program, !!args.stopOnEntry);
  }
}
