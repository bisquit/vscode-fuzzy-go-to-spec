import { anyOf, createRegExp } from 'magic-regexp';
import { getFilenameComponents } from './get-file';
import { logger } from './logger';

export function searchSourceFilesFromList({
  targetPath,
  candidates,
  specPatterns,
  allowedExtensions,
}: {
  targetPath: string;
  candidates: string[];
  specPatterns: string[];
  allowedExtensions: string[];
}): string[] {
  const { name } = getFilenameComponents(targetPath);

  const nameWithoutSpecPatterns = name.replace(
    createRegExp(anyOf(...specPatterns)),
    ''
  );

  const regex = createRegExp(
    nameWithoutSpecPatterns,
    anyOf(...allowedExtensions)
  );
  logger.info('regex: ', regex);

  return candidates.filter((v) =>
    regex.test(getFilenameComponents(v).filename)
  );
}
