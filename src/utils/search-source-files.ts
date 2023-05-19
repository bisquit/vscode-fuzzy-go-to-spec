import { search } from 'fast-fuzzy';
import { extname } from 'node:path';
import { getFile } from './get-file';
import { isSpec } from './is-spec';

export function searchSourceFilesFromList(
  targetPath: string,
  list: string[]
): string[] {
  const { filenameWithoutExt, ext } = getFile(targetPath);

  const candidates = list
    .filter((v) => !isSpec(v))
    .filter((v) => extname(v) === ext)
    .filter((v) => !includeBlacklist(v));

  const fuzzyResult = search(filenameWithoutExt, candidates, {
    returnMatchData: true,
  });

  const result = fuzzyResult.map((v) => v.item);
  return result;
}

function includeBlacklist(path: string) {
  return path.includes('d.ts');
}
