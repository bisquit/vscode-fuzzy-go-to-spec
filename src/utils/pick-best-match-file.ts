import { search } from 'fast-fuzzy';
import { logger } from './logger';

/**
 * Return best match using fuzzy search.
 */
export function pickBestMatchFile(targetPath: string, candidates: string[]) {
  if (candidates.length <= 1) {
    logger.info('There is zero or one candidates, just return target.');
    return candidates.at(0);
  }

  const fuzzyResult = search(targetPath, candidates, {
    returnMatchData: true,
  });
  logger.info('fuzzyResult: ', fuzzyResult);

  const result = fuzzyResult.map((v) => v.item);
  return result.at(0);
}
