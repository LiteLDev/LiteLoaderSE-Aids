/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-08-25 16:53:52
 * @LastEditTime: 2022-09-06 12:28:37
 */
import * as vscode from "vscode";

export class DocsPanel {
	public static currentPanel: DocsPanel | undefined;
	private readonly _panel: vscode.WebviewPanel;
	private _disposables: vscode.Disposable[] = [];

	private constructor(panel: vscode.WebviewPanel) {
		this._panel = panel;
		this._panel.onDidDispose(this.dispose, null, this._disposables);
		this._panel.webview.html = this._getWebviewContent();
	}

	private _getWebviewContent() {
		var uri = "https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/README";
		const mirroredocs = vscode.workspace
		.getConfiguration("extension.llseaids")
		.get("mirroredocs") as boolean;
		if(mirroredocs){
			uri = "https://docs.xclhove.top/LiteLoaderBDS/zh-Hans/#/LLSEPluginDevelopment/README";
		}
		// Tip: Install the es6-string-html VS Code extension to enable code highlighting below (必要)
		return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <style>
            body, html
              {
                margin: 0; padding: 0; height: 100%; overflow: hidden; background-color: #fff;
              }
          </style>
        </head>
        <body>
          <iframe width="100%" height="100%" src="${uri}" frameborder="0">
            <p>can't display ${uri}</p>
          </iframe>
        </body>
        </html>
        `;
	}

	public static render() {
		const autoSplitDocs = vscode.workspace
			.getConfiguration("extension.llseaids")
			.get("autoSplitDocs") as boolean;
		if (DocsPanel.currentPanel) {
			DocsPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
		} else {
			const panel = vscode.window.createWebviewPanel(
				"Docs",
				"Docs",
				autoSplitDocs ? vscode.ViewColumn.Two : vscode.ViewColumn.One,
				{
					enableScripts: true,
				}
			);
			DocsPanel.currentPanel = new DocsPanel(panel);
		}
	}

	// dispose it :D
	public dispose() {
		DocsPanel.currentPanel = undefined;
		if (this !== null) {
			this._panel.dispose();
			while (this._disposables.length) {
				const disposable = this._disposables.pop();
				if (disposable) {
					disposable.dispose();
				}
			}
		}
	}
}
