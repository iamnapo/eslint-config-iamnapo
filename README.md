# eslint-config-iamnapo

> ESLint shareable config for [iamnapo](https://iamnapo.me)’s coding style

[![build](https://badges.iamnapo.me/ci/iamnapo/eslint-config-iamnapo)](https://github.com/iamnapo/eslint-config-iamnapo/actions) [![npm](https://badges.iamnapo.me/npm/eslint-config-iamnapo)](https://www.npmjs.com/package/eslint-config-iamnapo) [![style](https://badges.iamnapo.me/style)](https://iamnapo.me)

## Install

```console
npm i eslint-config-iamnapo eslint eslint-plugin-import eslint-plugin-unicorn -D
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
npm i eslint-config-iamnapo eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks -D
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

### With TypeScript support

```console
npm i eslint-config-iamnapo eslint eslint-plugin-import eslint-plugin-unicorn @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript -D
```

Then, add this to your `.eslintrc.js`:

```js
module.exports = {
	extends: "iamnapo/typescript",
	rules: {
		// your overrides
	},
};
```

### With TypeScript & React support

```console
npx install-peerdeps --dev eslint-config-iamnapo
```

Then, add this to your `.eslintrc.js`:

```js
module.exports = {
	extends: "iamnapo/with-react-typescript",
	rules: {
		// your overrides
	},
};
```
