import { getAllowedExtensions } from '../utils/get-allowed-extensions';
import { logger } from '../utils/logger';
import { pickBestMatchFile } from '../utils/pick-best-match-file';
import { searchSourceFilesFromList } from '../utils/search-source-files';
import {
  createUriFromPath,
  getWorkspaceFiles,
  openFile,
  showInfo,
} from '../vscode-utils';

type GoToSourceArgs = {
  targetPath: string;
  specPatterns: string[];
  extensionPatterns: Record<string, string[]>;
};

export async function goToSource({
  targetPath,
  specPatterns,
  extensionPatterns,
}: GoToSourceArgs) {
  const candidates = (await getWorkspaceFiles()).map((v) => v.path);
  logger.info('candidates: ', candidates);

  const allowedExtensions = getAllowedExtensions(targetPath, extensionPatterns);

  const sourceFiles = searchSourceFilesFromList({
    targetPath,
    candidates,
    specPatterns,
    allowedExtensions,
  });
  logger.info('sourceFiles: ', sourceFiles);

  const bestMatch = pickBestMatchFile(targetPath, sourceFiles);
  logger.info('bestMatch: ', bestMatch);

  if (!bestMatch) {
    showInfo('Source file not found.');
    return;
  }

  const uri = createUriFromPath(bestMatch);
  await openFile(uri);

  return uri;
}
