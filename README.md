![logo](./assets/header.png)

# Fuzzy Go to Spec

Switch between the source file and the spec using fuzzy search.

## Motivation

In most cases, spec files are named like `<source>.spec`, but they are not always precisely suffixed.
You can solve this problem by writing mapping configuration, but it's a little cumbersome and annoying.

This extension tries to find the source and the spec using fuzzy search. It's a bit slower than deterministic search, but can be applied widely with no configuration.

## Usage

| commands                       | description                         | Shortcut |
| ------------------------------ | ----------------------------------- | -------- |
| `Fuzzy Go to Spec: Go to Spec` | Switch between the source and spec. |          |

## Alternatives

- https://github.com/lourenci/go-to-spec
- https://github.com/sporto/rails-go-to-spec-vscode
