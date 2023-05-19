import { expect, test } from 'vitest';
import { searchSpecFilesFromList } from '../../src/utils/search-spec-files';

type Case = [string, string[], string];

test.each([
  ['a/b/c/get.ts', ['a/b/c/get.test.ts'], 'a/b/c/get.test.ts'],
  [
    'a/b/c/get.ts',
    ['a/b/c/get.test.js', 'a/b/c/get.test.d.ts', 'a/b/c/get.test.ts'],
    'a/b/c/get.test.ts',
  ],
  // ['a/b/c/AppBar.vue', ['a/b/c/AppBar.test.ts'], 'a/b/c/AppBar.test.ts'],
] satisfies Case[])(
  'searchSpecFilesFromList(%s, %j) -> %s',
  (target, list, expected) => {
    const result = searchSpecFilesFromList(target, list);
    expect(result.at(0)).toBe(expected);
  }
);
