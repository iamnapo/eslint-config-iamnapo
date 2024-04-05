/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"./index",
		"airbnb-typescript/base",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:@stylistic/disable-legacy",
	],
	plugins: ["@typescript-eslint"],
	parserOptions: {
		project: true,
	},
	rules: {
		"no-void": ["error", { allowAsStatement: true }],
		"@stylistic/member-delimiter-style": ["error", { multiline: { delimiter: "semi", requireLast: true }, singleline: { delimiter: "semi", requireLast: false } }],
		"@stylistic/type-annotation-spacing": "error",
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{ disallowTypeAnnotations: false, fixStyle: "inline-type-imports" },
		],
		"@typescript-eslint/no-import-type-side-effects": "error",
		"@typescript-eslint/prefer-nullish-coalescing": ["error", { ignoreConditionalTests: true, ignorePrimitives: { number: true, bigint: true } }],
	},
};
