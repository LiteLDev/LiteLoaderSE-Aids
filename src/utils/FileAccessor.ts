import * as vscode from 'vscode';
import { TextEncoder } from "util";
// FileAccessor
export interface FileAccessor {
    readFile(path: string): Promise<Uint8Array>;
    writeFile(path: string, contents: Uint8Array): Promise<void>;
  }
  
  export const workspaceFileAccessor: FileAccessor = {
    async readFile(path: string): Promise<Uint8Array> {
      let uri: vscode.Uri;
      try {
        uri = pathToUri(path);
      } catch (e) {
        return new TextEncoder().encode(`cannot read '${path}'`);
      }
  
      return await vscode.workspace.fs.readFile(uri);
    },
    async writeFile(path: string, contents: Uint8Array) {
      await vscode.workspace.fs.writeFile(pathToUri(path), contents);
    },
  };
  
  function pathToUri(path: string) {
    try {
      return vscode.Uri.file(path);
    } catch (e) {
      return vscode.Uri.parse(path);
    }
  }
  