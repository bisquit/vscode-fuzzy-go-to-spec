import * as vscode from 'vscode';
import { searchSpecFilesFromList } from './utils/search-spec-files';
import { getWorkspaceFiles } from './vscode-utils';

export async function getSpecFiles(path: string): Promise<vscode.Uri[]> {
  const list = (await getWorkspaceFiles()).map((v) => v.path);
  const searchResult = searchSpecFilesFromList(path, list);
  const result = searchResult.map((v) => vscode.Uri.file(v));
  return result;
}
