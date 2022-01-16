'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderView = void 0;
const vscode = require("vscode");
class ReminderView {
    static show(context) {
        if (this.panel) {
            this.panel.reveal();
        }
        else {
            this.panel = vscode.window.createWebviewPanel("hana", "LXLDocs", vscode.ViewColumn.Two, {
                enableScripts: true,
                retainContextWhenHidden: true,
            });
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
exports.ReminderView = ReminderView;
//# sourceMappingURL=reminderView.js.map