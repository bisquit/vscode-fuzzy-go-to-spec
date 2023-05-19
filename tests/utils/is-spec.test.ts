import { expect, test } from 'vitest';
import { isSpec } from '../../src/utils/is-spec';

type Case = [string, boolean];

test.each([
  ['a/b/c/get.spec.ts', true],
  ['a/b/c/get.test.ts', true],
  ['a/b/c/get.ts', false],
  ['a/b/c/get.unit.spec.ts', true],
  ['a/b/c/get.unit.test.ts', true],
  ['a/b/c/test.ts', false],
] satisfies Case[])('isSpec(%s) -> %j', (target, expected) => {
  const result = isSpec(target);
  expect(result).toBe(expected);
});
