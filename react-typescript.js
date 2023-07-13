const { parserOptions, rules, plugins } = require("./typescript.js");

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"./react",
		"airbnb-typescript",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
	],
	plugins,
	parserOptions,
	rules,
};
