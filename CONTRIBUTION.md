## develop

```sh
pnpm i

pnpm run esbuild:watch
```

Debug > Run Extension

After modifying, 「Cmd + Shift + P」 > 「Developer: Reload Window」 in extension host window

## publish

```sh
# bump version
npx bumpp

pnpm run vsce:package
pnpm run vsce:publish
```
