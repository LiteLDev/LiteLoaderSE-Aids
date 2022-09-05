/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-04 14:55:15
 * @LastEditTime: 2022-09-04 20:15:18
 */
/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-04 14:55:15
 * @LastEditTime: 2022-09-04 19:03:15
 */
import {
	InitializedEvent,
	logger,
	Logger,
	LoggingDebugSession,
	StoppedEvent,
} from "@vscode/debugadapter";
import { DebugProtocol } from "@vscode/debugprotocol";
import { FileAccessor } from "../utils/FileAccessor";
import { LLRuntime } from "./LLRuntime";
const { Subject } = require("await-notify");

export class LLDebugSession extends LoggingDebugSession {
	private _reportProgress = false;
	private _useInvalidatedEvent = false;
	private _configurationDone = new Subject();
	private _runtime: LLRuntime;
	private static threadID = 1;

	public constructor(fileAccessor: FileAccessor) {
		super();

		this.setDebuggerLinesStartAt1(false);
		this.setDebuggerColumnsStartAt1(false);
		this._runtime = new LLRuntime(fileAccessor);

		// this debugger uses zero-based lines and columns

		this._runtime.on("stopOnEntry", () => {
			this.sendEvent(new StoppedEvent("entry", LLDebugSession.threadID));
		});
	}
	protected initializeRequest(
		response: DebugProtocol.InitializeResponse,
		args: DebugProtocol.InitializeRequestArguments
	): void {
		if (args.supportsProgressReporting) {
			this._reportProgress = true;
		}
		if (args.supportsInvalidatedEvent) {
			this._useInvalidatedEvent = true;
		}

		// build and return the capabilities of this debug adapter:
		response.body = response.body || {};

		this.sendResponse(response);
		this.sendEvent(new InitializedEvent());
	}
	protected configurationDoneRequest(
		response: DebugProtocol.ConfigurationDoneResponse,
		args: DebugProtocol.ConfigurationDoneArguments
	): void {
		super.configurationDoneRequest(response, args);
		// notify the launchRequest that configuration has finished
		this._configurationDone.notify();
	}
	protected async launchRequest(
		response: DebugProtocol.LaunchResponse,
		args: ILaunchRequestArguments
	) {
		// make sure to 'Stop' the buffered logging if 'trace' is not set
		logger.setup(
			args.trace ? Logger.LogLevel.Verbose : Logger.LogLevel.Stop,
			false
		);
		// wait 1 second until configuration has finished (and configurationDoneRequest has been called)
		await this._configurationDone.wait(1000);

		// start the program in the runtime

		if (args.compileError) {
			// simulate a compile/build error in "launch" request:
			// the error should not result in a modal dialog since 'showUser' is set to false.
			// A missing 'showUser' should result in a modal dialog.
			this.sendErrorResponse(response, {
				id: 1001,
				format: `compile error: some fake error.`,
				showUser:
					args.compileError === "show"
						? true
						: args.compileError === "hide"
						? false
						: undefined,
			});
		} else {
			this.sendResponse(response);
		}
	}
	protected restartFrameRequest(
		response: DebugProtocol.RestartFrameResponse,
		args: DebugProtocol.RestartFrameArguments,
		request?: DebugProtocol.Request | undefined
	): void {
		console.log("okkk");
	}
}
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
