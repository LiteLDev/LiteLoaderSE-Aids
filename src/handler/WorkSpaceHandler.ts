import * as vscode from "vscode";
import { DocsPanel } from "../panels/DocsPanel";
import { getReferenceHeader, isNotEmpty } from "../utils/SomeUtil";

export class WorkspaceHandler {
	context: vscode.ExtensionContext;
	constructor(context: vscode.ExtensionContext) {
		this.context = context;
	}

	// 编辑器上下文引用
	public snippetCompletion(): WorkspaceHandler {
		const provider = vscode.languages.registerCompletionItemProvider(
			["javascript", "typescript"],
			{
				provideCompletionItems(
					document: vscode.TextDocument,
					position: vscode.Position
				) {
					const snippetCompletion = new vscode.CompletionItem({
						description: " 导入LiteLoaderSE补全引用",
						label: "llse",
					});
					const snippetCompletion2 = new vscode.CompletionItem({
						description: " 导入LiteLoaderSE补全引用",
						label: "lxl",
					});
					const referencePath = vscode.workspace
						.getConfiguration()
						.get("extension.llseaids.javascriptApiPath");
					if (!isNotEmpty(referencePath)) {
						vscode.window.showWarningMessage("Api引用不存在,请重新配置补全库");
						vscode.commands.executeCommand("extension.llseaids.docs");
						return;
					}
					snippetCompletion.insertText = new vscode.SnippetString(
						getReferenceHeader(referencePath)
					);
					snippetCompletion2.insertText = new vscode.SnippetString(
						getReferenceHeader(referencePath)
					);
					return [snippetCompletion, snippetCompletion2];
				},
			},
			"ll" // triggered whenever a 'll' is being typed
		);
		this.context.subscriptions.push(provider);
		return this;
	}
	public onCreateFile(): WorkspaceHandler {
		vscode.workspace.onDidCreateFiles(function (e: vscode.FileCreateEvent) {
			e.files.forEach(function (p) {
				let path = p.fsPath.toLowerCase();
				if (
					path.includes("lxl.js") ||
					path.includes("llse.js") ||
					path.includes("ll.js") ||
					path.includes("lxl.ts") ||
					path.includes("llse.ts") ||
					path.includes("lls.ts") ||
					path.includes("ll.ts")
				) {
					const referencePath = vscode.workspace
						.getConfiguration()
						.get("extension.llseaids.javascriptApiPath");
					if (!isNotEmpty(referencePath)) {
						vscode.window.showWarningMessage("Api引用不存在,请重新配置补全库");
						vscode.commands.executeCommand("extension.llseaids.docs");
						return;
					}
					setTimeout(function () {
						vscode.window.activeTextEditor?.insertSnippet(
							new vscode.SnippetString(getReferenceHeader(referencePath))
						);
					}, 1000);
				}
			});
		});
		return this;
	}
	/**
	 * 初始化
	 * @param context
	 */
	init(context: vscode.ExtensionContext): WorkspaceHandler {
		// commands
		context.subscriptions.push(
			vscode.commands.registerCommand("extension.llseaids.config", (uri) => {
				//ConfigPanel.render(context.extensionUri);
			}),
			vscode.commands.registerCommand("extension.llseaids.docs", () => {
				DocsPanel.render();
			})
		);
		// may first time run
		var libraryPath = vscode.workspace
			.getConfiguration()
			.get("extension.llseaids.libraryPath");
		if (libraryPath === null) {
			vscode.commands.executeCommand("extension.llseaids.config");
		}
		return this;
	}
}
