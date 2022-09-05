import { EventEmitter } from "events";
import { FileAccessor } from "../utils/FileAccessor";

export class LLRuntime extends EventEmitter {
	constructor(private fileAccessor: FileAccessor) {
		super();
	}
}
