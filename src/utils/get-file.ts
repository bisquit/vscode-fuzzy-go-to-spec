import { basename, extname } from 'node:path';

/**
 * Returns filename components from file path
 */
export function getFilenameComponents(path: string) {
  const filename = basename(path);
  const extension = extname(filename);
  const name = filename.replace(extension, '');

  return {
    filename,
    name: name,
    extension: extension,
    /**
     * @deprecated
     */
    ext: extension,
    /**
     * @deprecated
     */
    filenameWithoutExt: name,
  };
}
