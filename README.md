# eslint-config-iamnapo

> ESLint shareable config for [iamnapo](https://iamnapo.me)'s coding style

[![Travis](https://flat.badgen.net/travis/iamnapo/eslint-config-iamnapo?icon=travis&label=Travis+CI)](https://travis-ci.com/iamnapo/eslint-config-iamnapo) [![npm](https://flat.badgen.net/npm/v/eslint-config-iamnapo)](https://www.npmjs.com/package/eslint-config-iamnapo) [![license](https://flat.badgen.net/github/license/iamnapo/eslint-config-iamnapo)](./LICENSE) [![style](https://flat.badgen.net/badge/code%20style/iamnapo/cyan)](https://iamnapo.me)

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
