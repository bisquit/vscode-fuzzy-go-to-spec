import { expect, test } from 'vitest';
import { pickBestMatchFile } from '../../src/utils/pick-best-match-file';

type Case = {
  target: string;
  candidates: string[];
  expected: string | undefined;
};

test.each([
  {
    target: 'a/b/c/index.ts',
    candidates: ['a/b/c/index.test.ts', 'a/b/d/index.test.ts'],
    expected: 'a/b/c/index.test.ts',
  },
  {
    target: 'a/b/c/index.test.ts',
    candidates: ['a/b/c/index.ts', 'a/b/d/index.ts'],
    expected: 'a/b/c/index.ts',
  },
] satisfies Case[])('isSpec(%s) -> %j', ({ target, candidates, expected }) => {
  const result = pickBestMatchFile(target, candidates);
  expect(result).toBe(expected);
});
