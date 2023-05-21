import { anyOf, char, createRegExp, oneOrMore } from 'magic-regexp';
import { getFilenameComponents } from './get-file';

/**
 * Whether if the file is spec.
 */
export function isSpec(path: string, specPatterns: string[]) {
  const { name } = getFilenameComponents(path);
  const regex = createRegExp(
    oneOrMore(char),
    anyOf(...specPatterns).at.lineEnd()
  );

  return regex.test(name);
}
