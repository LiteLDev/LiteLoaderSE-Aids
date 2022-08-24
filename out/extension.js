"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const ConfigPanel_1 = require("./panels/ConfigPanel");
function activate(context) {
    // show config panel
    const configCommand = vscode.commands.registerCommand("LLScriptHelper.config", () => {
        ConfigPanel_1.ConfigPanel.render(context.extensionUri);
    });
    const testCommand = vscode.commands.registerCommand("LLScriptHelper.test", () => {
        ConfigPanel_1.ConfigPanel.postMessage("change_library_ring", true);
    });
    context.subscriptions.push(configCommand, testCommand);
    vscode.commands.executeCommand('LLScriptHelper.config');
}
exports.activate = activate;
exports.deactivate = function () {
};
//# sourceMappingURL=extension.js.map