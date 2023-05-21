import * as vscode from 'vscode';
import { goToSource } from './usecases/go-to-source';
import { goToSpec } from './usecases/go-to-spec';
import { isSpec } from './utils/is-spec';
import { logger } from './utils/logger';

export function activate(context: vscode.ExtensionContext) {
  const specPatterns = (<string[]>(
    vscode.workspace.getConfiguration('fuzzyGoToSpec').get('specPatterns')
  )).filter(Boolean);

  const extensionPatterns = {
    '.ts': ['.ts', '.tsx', '.vue'],
    '.tsx': ['.ts', '.tsx'],
    '.vue': ['.ts', '.js'],
  };

  const disposable = vscode.commands.registerCommand(
    'fuzzy-go-to-spec.goToSpec',
    async () => {
      logger.setDefaultLevel('INFO');

      const activeDocument = vscode.window.activeTextEditor?.document;
      if (!activeDocument) {
        return;
      }

      const activeFilePath = activeDocument.fileName;

      logger.info('activeFilePath: ', activeFilePath);

      if (isSpec(activeFilePath, specPatterns)) {
        logger.info('opened file is spec, then find source...');

        await goToSource({
          targetPath: activeFilePath,
          specPatterns: specPatterns,
          extensionPatterns: extensionPatterns,
        });
      } else {
        logger.info('opened file is source, then find spec...');

        await goToSpec({
          targetPath: activeFilePath,
          specPatterns: specPatterns,
          extensionPatterns: extensionPatterns,
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}
