import { expect, test } from 'vitest';
import { searchSpecFilesFromList } from '../../src/utils/search-spec-files';

type Case = {
  target: string;
  list: string[];
  expected: string[];
};

test.each([
  {
    target: 'a/b/c/get.ts',
    list: ['a/b/c/get.test.ts'],
    expected: ['a/b/c/get.test.ts'],
  },
  {
    target: 'a/b/c/get.ts',
    list: ['a/b/c/get_test.ts'],
    expected: ['a/b/c/get_test.ts'],
  },
  {
    target: 'a/b/c/get.ts',
    list: ['a/b/c/get.test.js', 'a/b/c/get.test.d.ts', 'a/b/c/get.test.ts'],
    expected: ['a/b/c/get.test.ts'],
  },
  {
    target: 'a/b/c/index.ts',
    list: ['a/b/c/index.test.ts', 'a/b/d/index.test.ts'],
    expected: ['a/b/c/index.test.ts', 'a/b/d/index.test.ts'],
  },
  // react
  {
    target: 'a/b/c/AppBar.tsx',
    list: ['a/b/c/AppBar.test.ts'],
    expected: ['a/b/c/AppBar.test.ts'],
  },
  /// vue
  {
    target: 'a/b/c/AppBar.vue',
    list: ['a/b/c/AppBar.test.ts'],
    expected: ['a/b/c/AppBar.test.ts'],
  },
] satisfies Case[])(
  'searchSpecFilesFromList(%s, %j) -> %s',
  ({ target, list, expected }) => {
    const result = searchSpecFilesFromList({
      targetPath: target,
      candidates: list,
      specPatterns: ['.spec', '.test', '_test'],
      allowedExtensions: ['.ts', '.tsx', '.vue'],
    });
    expect(result).toEqual(expected);
  }
);
