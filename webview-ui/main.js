/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 11:22:00
 * @LastEditTime: 2022-09-06 12:46:54
 */
const vscode = acquireVsCodeApi();
window.addEventListener("load", main);

function postMessage(command, args) {
	vscode.postMessage({ command: command, data: args });
}

function initListener() {
	document
		.getElementById("source_get")
		.addEventListener("click", sourceGetButtonClick);
	document
		.getElementById("library_select")
		.addEventListener("click", librarySelectButtonClick);
	document
		.getElementById("bdsPath_select")
		.addEventListener("click", bdsPathSelectButtonClick);
	document
		.getElementById("source_radio_group")
		.addEventListener("click", sourceGroupClick);
	document.getElementById("command_reload").onblur = onDebuggerfocus;
	document.getElementById("command_load").onblur = onDebuggerfocus;
	document.getElementById("command_unload").onblur = onDebuggerfocus;
	const autoSplitDocsView = document.getElementById("autoSplitDocs");
	autoSplitDocsView.addEventListener("click", () => {
		postMessage("autoSplitDocs", {
			autoSplitDocs: autoSplitDocsView.checked,
		});
	});
	window.addEventListener("message", (event) => {
		const message = event.data; // The JSON data our extension sent
		console.log(message);
		switch (message.command) {
			case "set_library_progress":
				libraryLoadingStatus(message.data);
				break;
			case "set_default_config":
				setDefaultConfig(message.data);
				break;
			// some set
			case "set_library_path":
				const libraryPathText = document.getElementById("library_path");
				libraryPathText.value = message.data;
				break;
			case "set_library_url":
				const libraryUrlText = document.getElementById("library_url");
				libraryUrlText.value = message.data;
				break;
			case "set_bdsPath":
				const bdsPathText = document.getElementById("bdsPath");
				bdsPathText.value = message.data;
		}
	});
}
function libraryLoadingStatus(isShow) {
	const libraryRing = document.getElementById("library_ring");
	libraryRing.style.visibility = isShow ? "visible" : "hidden";
}

function sourceGroupClick() {
	// 自定义输入框隐藏状态切换
	const source_diy_url = document.getElementById("source_diy_url");
	const source_diy = document.getElementById("source_diy");
	if (source_diy.checked) {
		source_diy_url.style.display = "block";
	} else {
		source_diy_url.style.display = "none";
	}
}
function setDefaultConfig(args) {
	// library config page
	const source1 = document.getElementById("source_radio_1");
	const source2 = document.getElementById("source_radio_2");
	const source_diy = document.getElementById("source_diy");
	const source_diy_url = document.getElementById("source_diy_url");
	switch (args.sourceUrl) {
		case source1.value:
			source1.checked = true;
			source_diy.checked = false;
			source_diy_url.style.display = "none";
			break;
		case source2.value:
			source2.checked = true;
			source_diy.checked = false;
			source_diy_url.style.display = "none";
			break;
		case source_diy_url.value:
			source_diy.checked = true;
			source_diy_url.style.display = "block";
			break;
		default:
			source1.checked = false;
			source2.checked = false;
			source_diy.checked = true;
			source_diy_url.style.display = "block";
			source_diy_url.value = args.sourceUrl;
			break;
	}
	const libraryPathText = document.getElementById("library_path");
	libraryPathText.value = args.libraryPath;

	//debugger config page
	const debug_reload = document.getElementById("command_reload");
	const debug_load = document.getElementById("command_load");
	const debug_unload = document.getElementById("command_unload");
	const debug_bds_path = document.getElementById("bdsPath");
	debug_load.value = args.debugger.load;
	debug_reload.value = args.debugger.reload;
	debug_unload.value = args.debugger.unload;
	debug_bds_path.value = args.debugger.bdsPath;

	const autoSplitDocsView = document.getElementById("autoSplitDocs");
	console.log(args.autoSplitDocs);
	autoSplitDocsView.checked = args.autoSplitDocs;
}

function sourceGetButtonClick() {
	const source1 = document.getElementById("source_radio_1");
	const source2 = document.getElementById("source_radio_2");
	const source_diy = document.getElementById("source_diy");
	const source_diy_url = document.getElementById("source_diy_url");
	var defaultUrl = source1.value;
	if (source1.checked) {
		defaultUrl = source1.value;
	} else if (source2.checked) {
		defaultUrl = source2.value;
	} else if (source_diy.checked) {
		defaultUrl = source_diy_url.value;
	}
	postMessage("source_get", defaultUrl);
}

function librarySelectButtonClick() {
	postMessage("library_select", null);
}
function bdsPathSelectButtonClick() {
	postMessage("bdsPath_select", null);
}

function onDebuggerfocus() {
	const debug_reload = document.getElementById("command_reload");
	const debug_load = document.getElementById("command_load");
	const debug_unload = document.getElementById("command_unload");
	postMessage("debugger_config", {
		load: debug_load.value,
		reload: debug_reload.value,
		unload: debug_unload.value,
	});
}

function main() {
	initListener();
}
