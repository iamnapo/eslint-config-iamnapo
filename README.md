# eslint-config-iamnapo

> ESLint shareable config for [iamnapo](https://iamnapo.me)’s coding style

[![build](https://badges.iamnapo.me/ci/iamnapo/eslint-config-iamnapo)](https://github.com/iamnapo/eslint-config-iamnapo/actions) [![npm](https://badges.iamnapo.me/npm/eslint-config-iamnapo)](https://www.npmjs.com/package/eslint-config-iamnapo) [![style](https://badges.iamnapo.me/style)](https://iamnapo.me)

## Install

```console
npm i eslint-config-iamnapo -D
```

> This config requires `eslint` and (optionally) `typescript` to be installed.

## Usage

Add to your `eslint.config.js` one of the available configs (`default`, `react`, `typescript`, `react-typescript`) like so:

```js
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = [
	...eslintConfigIamnapo.configs.default.map((cfg) => ({
		...cfg,
		files: [eslintConfigIamnapo.filePatterns.default],
	})),
	// your overrides
];

export default config;
```

>[!TIP]
> `filePatterns` contains some helpful [patterns](https://eslint.org/docs/latest/use/configure/configuration-files#specifying-files-and-ignores) about each case, so you won’t have to figure them out yourself.
