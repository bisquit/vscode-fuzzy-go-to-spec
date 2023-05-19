import { basename, extname } from 'node:path';

export function getFile(path: string) {
  const filename = basename(path);
  const ext = extname(filename);
  const filenameWithoutExt = filename.replace(ext, '');

  return {
    filename,
    ext,
    filenameWithoutExt,
  };
}
