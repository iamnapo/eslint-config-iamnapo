const { parserOptions, rules, plugins } = require("./typescript.js");

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"./react",
		"airbnb-typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	plugins,
	parserOptions,
	rules,
};
