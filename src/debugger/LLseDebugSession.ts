/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-04 14:55:15
 * @LastEditTime: 2022-09-04 15:01:16
 */
import { LoggingDebugSession } from "@vscode/debugadapter";
import { FileAccessor } from "../utils/FileAccessor";
export class LLseDebugSession extends LoggingDebugSession {
	public constructor(fileAccessor: FileAccessor) {
		super();
		console.log("LLseDebugSession constructor");
		this.shutdown();
	}
}
