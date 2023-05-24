![logo](./assets/header.png)

# vscode-fuzzy-go-to-spec

Switch between the source file and the spec.

This extension uses fast-fuzzy if related spec cannot be determined.

![demo](./assets/demo.gif)

## Aim

1. Enable to toggle even if extension is not the same (e.g. `toast.tsx` <=> `toast.test.ts`, `Button.vue` <=> `Button.test.ts`)
2. Enable to toggle even if spec patterns are specific (e.g. `toast.ts` <=> `toast.unit.test.ts`)
3. Enable to toggle even if source file name is not unique (e.g. `index.ts` <=> `index.test.ts`)

## Commands

| commands                       | description                         | Shortcut          |
| ------------------------------ | ----------------------------------- | ----------------- |
| `Fuzzy Go to Spec: Go to Spec` | Switch between the source and spec. | `Cmd + Shift + t` |

## Configurations

| configuration                | description         | Default            |
| ---------------------------- | ------------------- | ------------------ |
| `fuzzyGoToSpec.specPatterns` | List spec patterns. | ['.spec', '.test'] |

## Alternatives

I have tried some great formers.
If the extension doesn't match for you, please try these.

- https://marketplace.visualstudio.com/items?itemName=Lourenci.go-to-spec
- https://marketplace.visualstudio.com/items?itemName=Nautigsam.go-to-test
