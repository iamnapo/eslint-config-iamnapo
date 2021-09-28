/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	extends: [
		"./index",
		"airbnb-typescript/base",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	parserOptions: {
		project: "tsconfig.json",
	},
	rules: {
		quotes: ["off"],
		"@typescript-eslint/quotes": ["error", "double"],
		indent: "off",
		"@typescript-eslint/indent": ["error", "tab", { SwitchCase: 1 }],
	},
};
