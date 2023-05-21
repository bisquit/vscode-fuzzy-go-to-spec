![logo](./assets/header.png)

# Fuzzy Go to Spec

VSCode extension that switch between the source file and the spec.
This extension uses fast-fuzzy if related spec cannot be determined.

## Aim

1. Enable to toggle even if extension is not the same (e.g. `get.tsx` <=> `get.test.ts`, `AppBar.vue` <=> `AppBar.test.ts`)
2. Enable to toggle even if spec patterns are unique (e.g. `get.ts` <=> `get.unit.test.ts`)
3. Enable to toggle even if source file name is not unique (e.g. `index.ts` <=> `index.test.ts`)

## Usage

| commands                       | description                         | Shortcut |
| ------------------------------ | ----------------------------------- | -------- |
| `Fuzzy Go to Spec: Go to Spec` | Switch between the source and spec. |          |

## Alternatives

I have tried some great formers.
If the extension doesn't match for you, please try these.

- https://marketplace.visualstudio.com/items?itemName=Lourenci.go-to-spec
- https://marketplace.visualstudio.com/items?itemName=Nautigsam.go-to-test
