import * as vscode from "vscode";
import { getReferenceHeader, isNotEmpty } from "../utils/SomeUtil";

export class WorkspaceHandler {
  context: vscode.ExtensionContext;
  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  // 编辑器上下文引用
  public snippetCompletion(): WorkspaceHandler {
    const provider = vscode.languages.registerCompletionItemProvider(
      "javascript",
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
            .get("LLScriptHelper.javascriptApiPath");
          if (!isNotEmpty(referencePath)) {
            vscode.window.showWarningMessage("请先配置补全库");
            vscode.commands.executeCommand("LLScriptHelper.config");
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
          path.includes("ll.js")
        ) {
          const referencePath = vscode.workspace
            .getConfiguration()
            .get("LLScriptHelper.javascriptApiPath");
          if (!isNotEmpty(referencePath)) {
            vscode.window.showWarningMessage("请先配置补全库");
            vscode.commands.executeCommand("LLScriptHelper.config");
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
}
