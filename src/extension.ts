import * as vscode from 'vscode';
import { getSourceFiles, getSpecFiles, isSpec } from './utils/path';
import { openFile } from './utils/vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "helloworld-sample" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    'extension.goToSpec',
    async () => {
      const activeDocument = vscode.window.activeTextEditor?.document;
      if (!activeDocument) {
        return;
      }

      const activeFilePath = activeDocument.fileName;

      console.log('activeFilePath', activeFilePath);

      if (isSpec(activeFilePath)) {
        console.log('find source...');
        const result = await getSourceFiles(activeFilePath);

        console.log('result', result);

        const first = result.at(0);
        if (first) {
          console.log('open', first);
          await openFile(first);
        }
      } else {
        console.log('find spec...');
        const result = await getSpecFiles(activeFilePath);

        console.log('result', result);

        const first = result.at(0);
        if (first) {
          console.log('open', first);
          await openFile(first);
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}
