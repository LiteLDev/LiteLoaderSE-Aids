"use strict";
import * as vscode from "vscode";

export class Utility {

    public static getConfiguration(section?: string, document?: vscode.TextDocument): vscode.WorkspaceConfiguration {
        if (document) {
            return vscode.workspace.getConfiguration(section, document.uri);
        } else {
            return vscode.workspace.getConfiguration(section);
        }
    }
}