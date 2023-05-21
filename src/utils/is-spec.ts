import { getFilenameComponents } from './get-file';

/**
 * Whether if the file is spec.
 */
export function isSpec(path: string, specPatterns: string[]) {
  const { name } = getFilenameComponents(path);
  return specPatterns.some((pattern) => {
    return new RegExp(`${pattern}$`).test(name);
  });
}
