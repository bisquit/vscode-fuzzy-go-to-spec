import * as vscode from 'vscode';
import { searchSourceFilesFromList } from './utils/search-source-files';
import { getWorkspaceFiles } from './vscode-utils';

export async function getSourceFiles(path: string): Promise<vscode.Uri[]> {
  const list = (await getWorkspaceFiles()).map((v) => v.path);
  const searchResult = searchSourceFilesFromList(path, list);
  const result = searchResult.map((v) => vscode.Uri.file(v));
  return result;
}
