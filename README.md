# eslint-config-iamnapo

> ESLint shareable config for [iamnapo](https://iamnapo.me)’s coding style

[![build](https://badges.iamnapo.me/ci/iamnapo/eslint-config-iamnapo)](https://github.com/iamnapo/eslint-config-iamnapo/actions) [![npm](https://badges.iamnapo.me/npm/eslint-config-iamnapo)](https://www.npmjs.com/package/eslint-config-iamnapo) [![style](https://badges.iamnapo.me/style)](https://iamnapo.me)

## Install

```console
npm i eslint-config-iamnapo -D
```

> This config requires `eslint` and (optionally) `typescript` to be installed.

## Usage

Add to your `.eslintrc.js` one of the available configs<sup>*</sup> like so:

```js
module.exports = {
	extends: "iamnapo",
	rules: {
		// your overrides
	},
};
```

<sup>*</sup>: `iamnapo`, `iamnapo/react`, `iamnapo/typescript`, `iamnapo/react-typescript`.

### Monorepo support

Due to [this](https://github.com/eslint/eslint/issues/3458) bug, if you are working on a monorepo add to the top of `.eslintrc.js`:

```js
require("eslint-config-iamnapo/patch");
```
