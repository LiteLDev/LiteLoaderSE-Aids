"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigPanel = void 0;
const vscode = require("vscode");
const getUri_1 = require("../utils/getUri");
const LibraryHandler_1 = require("../handler/LibraryHandler");
class ConfigPanel {
    constructor(panel, extensionUri) {
        this._disposables = [];
        this._panel = panel;
        this._panel.onDidDispose(this.dispose, null, this._disposables);
        this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);
        this._panel.onDidChangeViewState(this.onChangeState, null, this._disposables);
        this._setWebviewMessageListener(this._panel.webview);
    }
    static _setDefaultConfig() {
        // TODO problem with this
        var libraryUrl = vscode.workspace.getConfiguration("LLScriptHelper").get("libraryUrl", true);
        var libraryPath = vscode.workspace.getConfiguration("LLScriptHelper").get("libraryPath", true);
        console.log(libraryPath);
        var args = { libraryUrl: libraryUrl, libraryPath: libraryPath };
        ConfigPanel.postMessage("set_default_config", args);
    }
    _getWebviewContent(webview, extensionUri) {
        const toolkitUri = getUri_1.getUri(webview, extensionUri, [
            "node_modules",
            "@vscode",
            "webview-ui-toolkit",
            "dist",
            "toolkit.js", // A toolkit.min.js file is also available
        ]);
        const mainUri = getUri_1.getUri(webview, extensionUri, ["webview-ui", "main.js"]);
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
    <style>.div_s{ position: relative; top: 5px; }.div_ss{ position: relative; top: 10px; } .little_title{ font-size: 12px; } .div_s_h{ position: relative; top: 5px; display: flex; }</style>
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
          <div>
            <vscode-text-field size="50" id="library_path">
              <p class="little_title">库存放地址</p>
            </vscode-text-field>
          </div>
          <div class="div_s_h">
            <div>
              <vscode-button id="library_select">选择</vscode-button>
            </div>
          </div>
          <!-- Source -->
          <div>
            <vscode-text-field size="50" id="library_url">
              <p class="little_title">源地址</p>
            </vscode-text-field>
          </div>
          <div class="div_s_h">
            <div>
              <vscode-button id="library_get">拉取并保存</vscode-button>
            </div>
            <div style="position: relative; left: 10px;">
              <vscode-progress-ring id="library_ring" style="visibility:hidden;">
              </vscode-progress-ring>
            </div>
          </div>
            <!-- todo -->
        </div>
      </vscode-panel-view>
      <vscode-panel-view id="view-2">... Insert Complex Content ...</vscode-panel-view>
      <vscode-panel-view id="view-3">... Insert Complex Content ...</vscode-panel-view>
      <vscode-panel-view id="view-4">... Insert Complex Content ...</vscode-panel-view>
    </vscode-panels>

</html>
  `;
    }
    // 这是一个一个listener
    _setWebviewMessageListener(webview) {
        webview.onDidReceiveMessage((message) => {
            const command = message.command;
            const data = message.data;
            console.log(command, data);
            switch (command) {
                case "library_get":
                    LibraryHandler_1.LibraryHandler.getLibrary(data);
                    break;
                case "library_select":
                    LibraryHandler_1.LibraryHandler.selectLibrary((uri) => {
                        vscode.workspace.getConfiguration().update('LLScriptHelper.libraryPath', uri, vscode.ConfigurationTarget.Global).then(() => {
                            ConfigPanel._updateLibraryPath(uri);
                        });
                    });
            }
        }, undefined, this._disposables);
    }
    static postMessage(command, args) {
        var _a;
        (_a = ConfigPanel.currentPanel) === null || _a === void 0 ? void 0 : _a._panel.webview.postMessage({ command: command, data: args });
    }
    //render :D
    static render(extensionUri) {
        if (ConfigPanel.currentPanel) {
            ConfigPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
        }
        else {
            const panel = vscode.window.createWebviewPanel("ConfigPanel", "LLSEConfigPanel", vscode.ViewColumn.One, {
                enableScripts: true,
            });
            ConfigPanel.currentPanel = new ConfigPanel(panel, extensionUri);
        }
        ConfigPanel._setDefaultConfig();
    }
    onChangeState(e) {
        if (e.webviewPanel.active) {
            ConfigPanel._setDefaultConfig();
        }
    }
    static _updateLibraryPath(path) {
        var _a;
        (_a = ConfigPanel.currentPanel) === null || _a === void 0 ? void 0 : _a._panel.webview.postMessage({ command: "set_library_path", data: path });
    }
    static _updateLibraryUrl(url) {
        var _a;
        (_a = ConfigPanel.currentPanel) === null || _a === void 0 ? void 0 : _a._panel.webview.postMessage({ command: "set_library_url", data: url });
    }
    static _changeProgress(state) {
        var _a;
        (_a = ConfigPanel.currentPanel) === null || _a === void 0 ? void 0 : _a._panel.webview.postMessage({ command: "set_library_progress", data: state });
    }
    // dispose it :D
    dispose() {
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
exports.ConfigPanel = ConfigPanel;
//# sourceMappingURL=ConfigPanel.js.map