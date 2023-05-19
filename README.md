# VSCode Fuzzy Go to Spec

Switch between the source file and the spec.

## Motivation

In most cases, spec files are named like `<source>.spec`, but they are not always precisely suffixed.
You can solve this problem by writing mapping configuration, but it's a little cumbersome and annoying.

This extension tries to find the source and the spec using fuzzy search. It's a bit slower than deterministic search, but can be applied widely with no configuration.

## Alternatives

- https://github.com/lourenci/go-to-spec
- https://github.com/sporto/rails-go-to-spec-vscode
