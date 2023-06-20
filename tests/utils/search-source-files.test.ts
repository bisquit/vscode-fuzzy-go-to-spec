import { expect, test } from 'vitest';
import { searchSourceFilesFromList } from '../../src/utils/search-source-files';

type Case = {
  target: string;
  list: string[];
  expected: string[];
};

test.each([
  {
    target: 'a/b/c/get.test.ts',
    list: ['a/b/c/get.ts'],
    expected: ['a/b/c/get.ts'],
  },
  {
    target: 'a/b/c/get_test.ts',
    list: ['a/b/c/get.ts'],
    expected: ['a/b/c/get.ts'],
  },
  {
    target: 'a/b/c/index.test.ts',
    list: ['d/e/f/index.ts'],
    expected: ['d/e/f/index.ts'],
  },
  // react
  {
    target: 'a/b/c/AppBar.test.ts',
    list: ['a/b/c/AppBar.tsx'],
    expected: ['a/b/c/AppBar.tsx'],
  },
  // vue
  {
    target: 'a/b/c/AppBar.test.ts',
    list: ['a/b/c/AppBar.vue'],
    expected: ['a/b/c/AppBar.vue'],
  },
] satisfies Case[])(
  'searchSourceFilesFromList($target, $list) -> $expected',
  ({ target, list, expected }) => {
    const result = searchSourceFilesFromList({
      targetPath: target,
      candidates: list,
      specPatterns: ['.spec', '.test', '_test'],
      allowedExtensions: ['.ts', '.tsx', '.vue'],
    });
    expect(result).toEqual(expected);
  }
);
