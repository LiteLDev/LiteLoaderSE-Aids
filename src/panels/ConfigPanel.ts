import * as vscode from "vscode";
import { getUri } from "../utils/getUri";
import { LibraryHandler } from "../handler/LibraryHandler";
import { selectLibrary } from "../utils/SomeUtil";

export class ConfigPanel {
  public static currentPanel: ConfigPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._panel.onDidDispose(this.dispose, null, this._disposables);
    this._panel.webview.html = this._getWebviewContent(
      this._panel.webview,
      extensionUri
    );
    this._panel.onDidChangeViewState(
      this.onChangeState,
      null,
      this._disposables
    );
    this._setWebviewMessageListener(this._panel.webview);
  }

  public static _setDefaultConfig() {
    var sourceUrl = vscode.workspace
      .getConfiguration("LLScriptHelper")
      .get("sourceUrl", true);
    var libraryPath = vscode.workspace
      .getConfiguration("LLScriptHelper")
      .get("libraryPath", true);
    var args = { sourceUrl: sourceUrl, libraryPath: libraryPath };
    ConfigPanel.postMessage("set_default_config", args);
  }

  private _getWebviewContent(
    webview: vscode.Webview,
    extensionUri: vscode.Uri
  ) {
    const toolkitUri = getUri(webview, extensionUri, [
      "node_modules",
      "@vscode",
      "webview-ui-toolkit",
      "dist",
      "toolkit.js", // A toolkit.min.js file is also available
    ]);
    const mainUri = getUri(webview, extensionUri, ["webview-ui", "main.js"]);
    // Tip: Install the es6-string-html VS Code extension to enable code highlighting below (必要)
    return /*html*/ `
        <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width,initial-scale=1.0">
         <script type="module" src="${toolkitUri}">
         </script>
         <script type="module" src="${mainUri}">
         </script>
         <title>ConfigPanel!</title>
         <style>
           .div_s {
             position: relative;
             top: 5px;
           }

           .div_ss {
             position: relative;
             top: 10px;
           }

           .div_ssss {
             position: relative;
             top: 30px;
           }

           .little_title {
             font-size: 12px;
           }

           .div_s_h {
             position: relative;
             top: 5px;
             display: flex;
           }
         </style>
       </head>

       <body>
         <h1>LiteLoaderSE-Aids</h1>
         <p>这里可以方便你进行一些配置</p>
         <p>可以使用快捷键Ctrl+Shift+P 然后输入LLScriptHelper.config再次打开本页</p>
         <vscode-divider>
         </vscode-divider>
         <vscode-panels>
           <vscode-panel-tab id="tab-1">补全库</vscode-panel-tab>
           <vscode-panel-tab id="tab-2">调试器</vscode-panel-tab>
           <vscode-panel-tab id="tab-3">设置</vscode-panel-tab>
           <vscode-panel-tab id="tab-4">关于</vscode-panel-tab>
           <vscode-panel-view id="view-1">
             <div>
               <!-- Path -->
               <div style="display: vertical;">
                 <p>本地库存放目录</p>
                 <vscode-text-field size="50" id="library_path">
                 </vscode-text-field>
               </div>
               <div class="div_s_h">
                 <div>
                   <vscode-button id="library_select">选择</vscode-button>
                 </div>
               </div>
               <!-- Source -->
               <div>
                 <vscode-radio-group orientation="vertical" class="div_s" id='source_radio_group'>
                   <label slot="label">源地址</label>
                   <!-- 必须同时在Package.json配置-->
                   <vscode-radio id='source_radio_1' value='https://github.com/LiteLScript-Dev/HelperLib/raw/master/manifest.json'>
                     官方源 (Github Raw)
                   </vscode-radio>
                   <vscode-radio id='source_radio_2'
                     value='https://raw.fastgit.org/LiteLScript-Dev/HelperLib/master/manifest_cdn.json'>
                     镜像源 (FastGit)
                   </vscode-radio>
                   <vscode-radio id='source_diy'>
                     自定义
                   </vscode-radio>
                   <vscode-text-field size="50" id="source_diy_url" style='display:none;'>
                   </vscode-text-field>
                 </vscode-radio-group>
               </div>
               <div class="div_s_h">
                 <div>
                   <vscode-button id="source_get">拉取并保存</vscode-button>
                 </div>
                 <div style="position: relative; left: 10px;">
                   <vscode-progress-ring id="library_ring" style="visibility:hidden;">
                   </vscode-progress-ring>
                 </div>
               </div>
               <!-- todo -->
             </div>
             </div>
           </vscode-panel-view>
           <vscode-panel-view id="view-2">... Nothing ...</vscode-panel-view>
           <vscode-panel-view id="view-3">... Nothing ...</vscode-panel-view>
           <vscode-panel-view id="view-4">... Nothing ...</vscode-panel-view>
         </vscode-panels>

       </html>
  `;
  }

  // 这是一个一个listener
  private _setWebviewMessageListener(webview: vscode.Webview) {
    webview.onDidReceiveMessage(
      (message: any) => {
        const command = message.command;
        const data = message.data;
        console.log(command, data);
        switch (command) {
          case "source_get":
            LibraryHandler.getLibrary(data);
            break;
          case "library_select":
            selectLibrary((uri) => {
              vscode.workspace
                .getConfiguration()
                .update(
                  "LLScriptHelper.libraryPath",
                  uri,
                  vscode.ConfigurationTarget.Global
                )
                .then(() => {
                  ConfigPanel._updateLibraryPath(uri);
                  LibraryHandler.libraryPath = uri;
                });
            });
        }
      },
      undefined,
      this._disposables
    );
  }
  public static postMessage(command: String, args: any) {
    ConfigPanel.currentPanel?._panel.webview.postMessage({
      command: command,
      data: args,
    });
  }
  //render :D
  public static render(extensionUri: vscode.Uri) {
    if (ConfigPanel.currentPanel) {
      ConfigPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
    } else {
      const panel = vscode.window.createWebviewPanel(
        "ConfigPanel",
        "ConfigPanel",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );

      ConfigPanel.currentPanel = new ConfigPanel(panel, extensionUri);
    }
    ConfigPanel._setDefaultConfig();
  }
  private onChangeState(e: vscode.WebviewPanelOnDidChangeViewStateEvent) {
    if (e.webviewPanel.active) {
      ConfigPanel._setDefaultConfig();
    }
  }
  public static _updateLibraryPath(path: String) {
    ConfigPanel.currentPanel?._panel.webview.postMessage({
      command: "set_library_path",
      data: path,
    });
  }
  public static _updateLibraryUrl(url: String) {
    ConfigPanel.currentPanel?._panel.webview.postMessage({
      command: "set_library_url",
      data: url,
    });
  }
  public static _changeProgress(state: boolean) {
    ConfigPanel.currentPanel?._panel.webview.postMessage({
      command: "set_library_progress",
      data: state,
    });
  }

  // dispose it :D
  public dispose() {
    ConfigPanel.currentPanel = undefined;
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
