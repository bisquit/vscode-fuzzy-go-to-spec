import * as vscode from 'vscode';

export async function openFile(uri: vscode.Uri) {
  const document = await vscode.workspace.openTextDocument(uri);
  await vscode.window.showTextDocument(document);
}

export async function getWorkspaceFiles() {
  return vscode.workspace.findFiles('**/*', 'node_modules');
}
