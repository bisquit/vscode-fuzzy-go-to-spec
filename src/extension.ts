import * as path from 'node:path';
import * as vscode from 'vscode';
import { openFile } from './utils/vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "helloworld-sample" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    'extension.helloWorld',
    async () => {
      const activeDocument = vscode.window.activeTextEditor?.document;
      if (!activeDocument) {
        return;
      }

      const filePath = activeDocument.fileName;

      console.log('filePath', filePath);

      const basename = path.basename(filePath);

      console.log('basename', basename);

      const result = await vscode.workspace.findFiles('**/index.ts');

      console.log('result', result);

      const first = result.at(0);
      if (first) {
        console.log('open', first);
        await openFile(first);
      }
    }
  );

  context.subscriptions.push(disposable);
}
