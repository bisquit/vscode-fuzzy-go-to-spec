import { describe, expect, test } from 'vitest';
import { isSpec } from '../../src/utils/is-spec';

type Case = [string, boolean];

test.each([
  ['a/b/c/get.spec.ts', true],
  ['a/b/c/get.test.ts', true],
  ['a/b/c/get_test.ts', true],
  ['a/b/c/get.ts', false],
  ['a/b/c/test.ts', false],
  ['a/b/c/get.test.example.ts', false],
  ['a/b/c/is-spec.ts', false],
  ['a/b/c/.spec.ts', false],
] satisfies Case[])('isSpec(%s) -> %j', (target, expected) => {
  const result = isSpec(target, ['.spec', '.test', '_test']);
  expect(result).toBe(expected);
});

describe('custom patterns', () => {
  test.each([
    ['a/b/c/get.e2e.ts', true],
    ['a/b/c/get.unit.test.ts', true],
  ] satisfies Case[])('isSpec(%s) -> %j', (target, expected) => {
    const result = isSpec(target, ['.e2e', '.unit.test']);
    expect(result).toBe(expected);
  });
});
