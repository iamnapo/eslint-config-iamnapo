# eslint-config-iamnapo

> ESLint shareable config for [iamnapo](https://iamnapo.me)’s coding style

[![build](https://badges.iamnapo.me/ci/iamnapo/eslint-config-iamnapo)](https://github.com/iamnapo/eslint-config-iamnapo/actions) [![npm](https://badges.iamnapo.me/npm/eslint-config-iamnapo)](https://www.npmjs.com/package/eslint-config-iamnapo) [![style](https://badges.iamnapo.me/style)](https://iamnapo.me)

## Install

```console
npm i eslint-config-iamnapo -D
```

> This config requires `eslint` and (optionally) `typescript` to be installed.

## Usage

Add to your `eslint.config.js` one of the available configs<sup>*</sup> like so:

```js
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = [
	...eslintConfigIamnapo.configs.default.map(cfg => ({
		...cfg,
		files: ["**/*.{c,m,}js"], // or "**/*.{c,m,}js{x,}"
		// files: ["**/*.{c,m,}ts"], // or "**/*.{c,m,}ts{x,}"
	})),
	// your overrides
];

export default config;
```

<sup>*</sup>: `default`, `react`, `typescript`, `react-typescript`.
