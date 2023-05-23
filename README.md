# React Native Bottom Sheet

Forked from https://github.com/Mahmoud-SK/react-native-bottom-sheet to address a11y issues.

## To update package

1. Clone the repo locally, make code changes
2. Install dependencies and build by

```
yarn && yarn build
```

2. To test the local change, run

```
yarn link
```

in the root of this package, then in the consuming repo, for example `rider`, run:

```
cd spare/rider
yarn link @sparelabs/bottom-sheet
```

3. After testing locally, you can now publish the new package by following steps:

- i) Create a local `.npmrc` file, add the following:

```
@sparelabs:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={NPM_WRITE_TOKEN}
```

You can find the npm write token in 1Password, titled `NPM registry write token`.

- ii) Commit local changes following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

- iii) Increase package version by

```
npm version <patch|minor|major>
```

- iv) Publish

```
npm publish --access public
```

4. Finally, update the package version in `package.json` in the consuming repo, that's it!
