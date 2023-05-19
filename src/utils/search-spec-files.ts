import { search } from 'fast-fuzzy';
import groupBy from 'just-group-by';
import { extname } from 'node:path';
import { getFile } from './get-file';
import { isSpec } from './is-spec';

export function searchSpecFilesFromList(
  targetPath: string,
  list: string[]
): string[] {
  const { filenameWithoutExt, ext } = getFile(targetPath);

  const candidates = list.filter((v) => isSpec(v));

  const fuzzyResult = search(filenameWithoutExt, candidates, {
    returnMatchData: true,
  });

  const result = fuzzyResult.map((v) => v.item);
  preferExt(result, ext);
  return result;
}

function preferExt(v: string[], ext: string) {
  const byExt = groupBy(v, (v) => extname(v));
}
