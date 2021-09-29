/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	extends: [
		"./with-react",
		"airbnb-typescript",
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
		"@typescript-eslint/no-non-null-assertion": "off",
		"no-void": ["error", { allowAsStatement: true }],
	},
};
