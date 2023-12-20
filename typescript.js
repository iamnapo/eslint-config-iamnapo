/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"./index",
		"airbnb-typescript/base",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
	],
	plugins: ["@typescript-eslint"],
	parserOptions: {
		project: true,
	},
	rules: {
		indent: "off",
		"no-void": ["error", { allowAsStatement: true }],
		quotes: ["off"],
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{ disallowTypeAnnotations: false, fixStyle: "inline-type-imports" },
		],
		"@typescript-eslint/indent": ["error", "tab", { SwitchCase: 1 }],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{ multiline: { delimiter: "semi", requireLast: true }, singleline: { delimiter: "semi", requireLast: false } },
		],
		"@typescript-eslint/no-import-type-side-effects": "error",
		"@typescript-eslint/prefer-nullish-coalescing": ["error", { ignoreConditionalTests: true, ignorePrimitives: { number: true, bigint: true } }],
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/type-annotation-spacing": "error",
	},
};
