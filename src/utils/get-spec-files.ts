import { search } from 'fast-fuzzy';
import { extname } from 'path';
import * as vscode from 'vscode';
import { getFile } from './get-file';
import { isSpec } from './is-spec';
import { getWorkspaceFiles } from './vscode';

export async function getSpecFiles(path: string): Promise<vscode.Uri[]> {
  const { filenameWithoutExt, ext } = getFile(path);

  const candidates = (await getWorkspaceFiles())
    .map((v) => v.path)
    .filter((v) => isSpec(v))
    .filter((v) => extname(v) === ext);
  console.log('candidates: ', candidates);

  const fuzzyResult = search(filenameWithoutExt, candidates, {
    returnMatchData: true,
  });
  console.log('fuzzyResult: ', fuzzyResult);

  const result = fuzzyResult.map((v) => v.item).map((v) => vscode.Uri.file(v));
  return result;
}
