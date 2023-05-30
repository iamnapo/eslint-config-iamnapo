/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"./index",
		"airbnb-typescript/base",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	plugins: ["@typescript-eslint"],
	parserOptions: {
		project: "tsconfig.json",
	},
	rules: {
		indent: "off",
		"no-void": ["error", { allowAsStatement: true }],
		quotes: ["off"],
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
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/type-annotation-spacing": "error",
	},
};
