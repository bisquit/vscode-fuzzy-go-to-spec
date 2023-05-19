import { getFile } from './get-file';

export function isSpec(path: string) {
  const { filenameWithoutExt } = getFile(path);
  return /.*?(spec|test)$/.test(filenameWithoutExt);
}
