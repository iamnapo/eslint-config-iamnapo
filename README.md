# eslint-config-iamnapo

> ESLint shareable config for [iamnapo](https://iamnapo.me)'s coding style

[![travis](https://img.shields.io/travis/com/iamnapo/eslint-config-iamnapo.svg?style=for-the-badge&logo=travis&label=)](https://travis-ci.com/iamnapo/eslint-config-iamnapo) [![npm](https://img.shields.io/npm/v/eslint-config-iamnapo.svg?style=for-the-badge)](https://www.npmjs.com/package/eslint-config-iamnapo) [![license](https://img.shields.io/github/license/iamnapo/eslint-config-iamnapo.svg?style=for-the-badge)](./LICENSE) [![style](https://img.shields.io/badge/code%20style-iamnapo-cyan.svg?style=for-the-badge)](https://iamnapo.me)

## Usage

```bash
$ npm i eslint-config-iamnapo babel-eslint eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D
```

Then, add this to your `.eslintrc` file:

```json
{
  "extends": "iamnapo"
}
```

*Note: `eslint-config-` prefix is omitted, since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT © [Napoleon-Christos Oikonomou](https://iamnapo.me)
