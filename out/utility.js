"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const vscode = require("vscode");
class Utility {
    static getConfiguration(section, document) {
        if (document) {
            return vscode.workspace.getConfiguration(section, document.uri);
        }
        else {
            return vscode.workspace.getConfiguration(section);
        }
    }
}
exports.Utility = Utility;
//# sourceMappingURL=utility.js.map