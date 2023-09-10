# vscode-fuzzy-go-to-spec

[![Known Vulnerabilities](https://snyk.io/test/github/bisquit/vscode-fuzzy-go-to-spec/badge.svg)](https://snyk.io/test/github/bisquit/vscode-fuzzy-go-to-spec)

Switch between the source file and the spec.

(Why I created this extension? See Comparison at the bottom of the README.)

![demo](./assets/demo.gif)

## Commands

| commands                       | description                         | Shortcut          |
| ------------------------------ | ----------------------------------- | ----------------- |
| `Fuzzy Go to Spec: Go to Spec` | Switch between the source and spec. | `Cmd + Shift + t` |

## Configurations

| configuration                | description         | Default                     |
| ---------------------------- | ------------------- | --------------------------- |
| `fuzzyGoToSpec.specPatterns` | List spec patterns. | ['.spec', '.test', '_test'] |

### Add spec patterns

Open extension settings, and add your spec patterns to `Fuzzy Go To Spec: SpecPatterns`.

For example, your specs are named like `someFunction.unit.test.ts`, then add `'.unit.test'` to the list.

After modified, `Cmd + Shift + P` -> 「Developer: Reload Window」

## Comparison to Other switchers

There are some great formers, but almost all has problems.

1. Cannot switch between the source and spec when their extensions are not the same
2. Cannot switch properly if custom patterns are configured
3. Cannot determine proper spec if file names are duplicated

So I created the same extension from scratch, and aim for...

1. Enable to toggle even if extension is not the same (e.g. `toast.tsx` <=> `toast.test.ts`, `Button.vue` <=> `Button.test.ts`)
2. Enable to toggle even if spec patterns are specific (e.g. `toast.ts` <=> `toast.unit.test.ts`)
3. Enable to toggle even if source file name is not unique (e.g. `index.ts` <=> `index.test.ts`)

This extension uses smart regexp patterns to accomplish 1 and 2, and uses [fast-fuzzy](https://github.com/EthanRutherford/fast-fuzzy) to accomplish 3.
