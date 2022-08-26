"use strict";
import * as vscode from "vscode";
import * as path from "path";

export class ReminderView {
  private static panel: vscode.WebviewPanel | undefined;

  public static show(context: vscode.ExtensionContext) {
    if (this.panel) {
      this.panel.reveal();
    } else {
      this.panel = vscode.window.createWebviewPanel(
        "hana",
        "LiteLoaderScript Docs",
        vscode.ViewColumn.Two,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        }
      );

      this.panel.webview.html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<script language="javascript" type="text/javascript"> 
window.location.href='https://lxl.litebds.com/#/zh_CN/Development/';
</script>
</html>`;

      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });
    }
  }
}
