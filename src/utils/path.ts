import { search } from 'fast-fuzzy';
import { basename, extname } from 'node:path';
import * as vscode from 'vscode';
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

export async function getSpecFiles(path: string): Promise<vscode.Uri[]> {
  const { filenameWithoutExt } = getFile(path);
  const result = await vscode.workspace.findFiles(
    `**/*${filenameWithoutExt}*spec*`
  );
  return result;
}

export async function getSourceFiles(path: string): Promise<vscode.Uri[]> {
  const { filenameWithoutExt } = getFile(path);

  /**
   * prerequisite conditions
   * 1. spec file is named 'spec'
   * 2. spec file is same extension as source
   */

  let candidates = (
    await vscode.workspace.findFiles('**/*', 'node_modules')
  ).map((v) => v.path);
  candidates = candidates.filter((v) => !v.includes('spec'));
  candidates = candidates.filter((v) => extname(v) === '.ts');
  candidates = candidates.filter((v) => !v.includes('d.ts'));

  console.log('candidates', candidates);

  console.log('search', filenameWithoutExt);
  const fuzzyResult = search(filenameWithoutExt, candidates, {
    returnMatchData: true,
  });
  console.log('fuzzyResult', fuzzyResult);

  const result = fuzzyResult.map((v) => v.item).map((v) => vscode.Uri.file(v));
  console.log('result', result);

  return result;
}

export function isSpec(path: string) {
  const { filenameWithoutExt } = getFile(path);
  return /.*spec.*/.test(filenameWithoutExt);
}
