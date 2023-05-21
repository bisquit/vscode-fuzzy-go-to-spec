import { getFilenameComponents } from './get-file';

/**
 * Return extensions from pattern list
 */
export function getAllowedExtensions(
  targetPath: string,
  extensionPatterns: Record<string, string[]>
) {
  const { extension } = getFilenameComponents(targetPath);
  return extensionPatterns[extension] ?? [extension];
}
