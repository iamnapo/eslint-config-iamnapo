# eslint-config-iamnapo

> ESLint shareable config for [iamnapo](https://iamnapo.me)’s coding style

[![build](https://img.shields.io/github/workflow/status/iamnapo/eslint-config-iamnapo/ci?style=for-the-badge&logo=github&label=)](https://github.com/iamnapo/eslint-config-iamnapo/actions) [![npm](https://img.shields.io/npm/v/eslint-config-iamnapo.svg?style=for-the-badge&logo=npm&label=)](https://www.npmjs.com/package/eslint-config-iamnapo) [![style](https://img.shields.io/badge/code%20style-iamnapo-cyan.svg?style=for-the-badge)](https://iamnapo.me)

## Install

```console
$ npm i eslint-config-iamnapo eslint eslint-plugin-import eslint-plugin-unicorn -D
```

Then, add this to your `.eslintrc.js`:

```js
module.exports = {
	extends: "iamnapo",
	rules: {
		// your overrides
	},
};
```

### With React support

```console
$ npx install-peerdeps --dev eslint-config-iamnapo
```

Then, add this to your `.eslintrc.js`:

```js
module.exports = {
	extends: "iamnapo/with-react",
	rules: {
		// your overrides
	},
};
```
