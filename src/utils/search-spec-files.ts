import { anyOf, createRegExp } from 'magic-regexp';
import { getFilenameComponents } from './get-file';
import { logger } from './logger';

export function searchSpecFilesFromList({
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

  const regex = createRegExp(
    name,
    anyOf(...specPatterns),
    anyOf(...allowedExtensions)
  );
  logger.info('regex: ', regex);

  return candidates.filter((v) =>
    regex.test(getFilenameComponents(v).filename)
  );
}
