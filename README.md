# eslint-config-iamnapo

> ESLint shareable config for [iamnapo](https://iamnapo.me)’s coding style

[![build](https://img.shields.io/github/workflow/status/iamnapo/eslint-config-iamnapo/ci?style=for-the-badge&logo=github&label=)](https://github.com/iamnapo/eslint-config-iamnapo/actions) [![npm](https://img.shields.io/npm/v/eslint-config-iamnapo.svg?style=for-the-badge&logo=npm&label=)](https://www.npmjs.com/package/eslint-config-iamnapo) [![license](https://img.shields.io/github/license/iamnapo/eslint-config-iamnapo.svg?style=for-the-badge)](./LICENSE) [![style](https://img.shields.io/badge/code%20style-iamnapo-cyan.svg?style=for-the-badge)](https://iamnapo.me)

## Install

### With React

```console
$ npx install-peerdeps --dev eslint-config-iamnapo
```

Then, add this to your `.eslintrc` file:

```json
{
	"extends": "iamnapo/with-react"
}
```

### Without React

```console
$ npm i --dev eslint-config-iamnapo eslint-config-airbnb-base eslint-plugin-import eslint-plugin-unicorn
```

Then, add this to your `.eslintrc` file:

```json
{
	"extends": "iamnapo"
}
```

## Usage

_Note: `eslint-config-` prefix is omitted, since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file. For example:

```json
{
	"extends": "iamnapo",
	"rules": {
		"quotes": ["error", "single"]
	}
}
```

> If you’re using [GitHub Package Registry](https://github.com/features/package-registry), the package is called `@iamnapo/eslint-config-iamnapo`.
