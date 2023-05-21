import { getAllowedExtensions } from '../utils/get-allowed-extensions';
import { logger } from '../utils/logger';
import { pickBestMatchFile } from '../utils/pick-best-match-file';
import { searchSpecFilesFromList } from '../utils/search-spec-files';
import {
  createUriFromPath,
  getWorkspaceFiles,
  openFile,
  showInfo,
} from '../vscode-utils';

type GoToSpecArgs = {
  targetPath: string;
  specPatterns: string[];
  extensionPatterns: Record<string, string[]>;
};

export async function goToSpec({
  targetPath,
  specPatterns,
  extensionPatterns,
}: GoToSpecArgs) {
  const candidates = (await getWorkspaceFiles()).map((v) => v.path);
  logger.info('candidates: ', candidates);

  const allowedExtensions = getAllowedExtensions(targetPath, extensionPatterns);

  const specFiles = searchSpecFilesFromList({
    targetPath,
    candidates,
    specPatterns,
    allowedExtensions,
  });
  logger.info('specFiles: ', specFiles);

  const bestMatch = pickBestMatchFile(targetPath, specFiles);
  logger.info('bestMatch: ', bestMatch);

  if (!bestMatch) {
    showInfo('Spec file not found.');
    return;
  }

  const uri = createUriFromPath(bestMatch);
  await openFile(uri);

  return uri;
}
