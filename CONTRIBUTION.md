## develop

```sh
pnpm i

pnpm run esbuild:watch
```

Debug > Run Extension

## publish

```sh
# bump version
npx bumpp

pnpm run vsce:package
pnpm run vsce:publish
```
