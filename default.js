import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginStylistic from "@stylistic/eslint-plugin";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
	...compat.extends("airbnb/base"),
	eslintPluginUnicorn.configs["flat/recommended"],
	eslintPluginStylistic.configs["disable-legacy"],
	{
		plugins: {
			"@stylistic": eslintPluginStylistic,
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		languageOptions: {
			ecmaVersion: 15,
		},
	},
	{
		rules: {
			"import/no-named-as-default": "off", // TODO: Re-enable when fixed
			"import/no-named-as-default-member": "off", // TODO: Re-enable when fixed
			"@stylistic/brace-style": [
				"error",
				"1tbs",
				{
					allowSingleLine: true,
				},
			],
			"@stylistic/comma-dangle": ["error", "always-multiline"],
			"@stylistic/comma-spacing": "error",
			"@stylistic/func-call-spacing": "error",
			"@stylistic/function-paren-newline": ["error", "consistent"],
			"@stylistic/indent": ["error", "tab", { SwitchCase: 1 }],
			"@stylistic/keyword-spacing": "error",
			"@stylistic/lines-between-class-members": "error",
			"@stylistic/max-len": [
				"error",
				{
					code: 130,
					tabWidth: 2,
					ignoreUrls: true,
					ignoreRegExpLiterals: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
				},
			],
			"@stylistic/no-extra-semi": "error",
			"@stylistic/no-mixed-operators": [
				"error",
				{
					groups: [
						["%", "**"],
						["%", "+"],
						["%", "-"],
						["%", "*"],
						["%", "/"],
						["/", "*"],
						["&", "|", "<<", ">>", ">>>"],
						["==", "!=", "===", "!=="],
						["&&", "||"],
					],
					allowSamePrecedence: false,
				},
			],
			"@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
			"@stylistic/object-curly-spacing": ["error", "always"],
			"@stylistic/padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "multiline-block-like", next: "*" },
			],
			"@stylistic/quotes": ["error", "double"],
			"@stylistic/semi": "error",
			"@stylistic/space-before-blocks": "error",
			"@stylistic/space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
			"@stylistic/space-infix-ops": "error",
			"@stylistic/wrap-iife": ["error", "inside", { functionPrototypeMethods: true }],
			"array-callback-return": ["error", { allowImplicit: true }],
			"class-methods-use-this": "off",
			"func-names": ["error", "never"],
			"global-require": "off",
			"import/extensions": ["error", "ignorePackages"],
			"import/no-anonymous-default-export": "error",
			"import/no-duplicates": ["error", { considerQueryString: true, "prefer-inline": true }],
			"import/order": ["error", { "newlines-between": "always" }],
			"import/prefer-default-export": "off",
			"no-await-in-loop": "off",
			"no-console": "off",
			"no-implicit-coercion": "error",
			"no-negated-condition": "error",
			"no-param-reassign": "off",
			"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
			"no-restricted-exports": ["error", { restrictedNamedExports: ["then"] }],
			"no-restricted-syntax": "off",
			"no-return-assign": ["error", "always"],
			"no-underscore-dangle": "off",
			"no-unsafe-optional-chaining": "error",
			"no-unused-vars": ["error", { args: "after-used", ignoreRestSiblings: true, vars: "all", varsIgnorePattern: "^_" }],
			"no-use-before-define": ["error", { functions: false }],
			"prefer-destructuring": "off",
			"prefer-regex-literals": "error",
			"require-await": "error",
			"unicorn/consistent-destructuring": "error",
			"unicorn/no-array-callback-reference": "off",
			"unicorn/no-nested-ternary": "off",
			"unicorn/no-null": "off",
			"unicorn/prefer-switch": ["error", { emptyDefaultCase: "do-nothing-comment" }],
			"unicorn/prevent-abbreviations": "off",
		},
	},
];

export default config;
