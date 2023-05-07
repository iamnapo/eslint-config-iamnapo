/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	env: {
		es6: true,
		jest: true,
		node: true,
		es2017: true,
		es2020: true,
		es2021: true,
		es2022: true,
	},
	extends: ["airbnb/base", "plugin:ava/recommended", "plugin:unicorn/recommended"],
	plugins: ["ava", "unicorn"],
	reportUnusedDisableDirectives: true,
	rules: {
		"array-callback-return": ["error", { allowImplicit: true }],
		"class-methods-use-this": "off",
		"func-names": ["error", "never"],
		"function-paren-newline": ["error", "consistent"],
		"global-require": "off",
		"import/extensions": ["error", "ignorePackages"],
		"import/no-anonymous-default-export": "error",
		"import/order": ["error", { "newlines-between": "always" }],
		"import/prefer-default-export": "off",
		indent: ["error", "tab", { SwitchCase: 1 }],
		"max-len": ["error", { code: 130, tabWidth: 2, ignoreUrls: true, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
		"no-await-in-loop": "off",
		"no-console": "off",
		"no-implicit-coercion": "error",
		"no-mixed-operators": "error",
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"no-negated-condition": "error",
		"no-nested-ternary": "off",
		"no-param-reassign": "off",
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"no-restricted-exports": ["error", { restrictedNamedExports: ["then"] }],
		"no-restricted-syntax": "off",
		"no-return-assign": ["error", "always"],
		"no-tabs": "off",
		"no-underscore-dangle": "off",
		"no-unsafe-optional-chaining": "error",
		"no-unused-vars": ["error", { args: "after-used", ignoreRestSiblings: true, vars: "all", varsIgnorePattern: "^_" }],
		"no-use-before-define": ["error", { functions: false }],
		"object-curly-newline": "off",
		"padding-line-between-statements": ["error", { blankLine: "always", prev: "multiline-block-like", next: "*" }],
		"prefer-destructuring": "off",
		"prefer-regex-literals": "error",
		quotes: ["error", "double"],
		"require-await": "error",
		"space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
		"unicorn/no-array-callback-reference": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-nested-ternary": "off",
		"unicorn/no-null": "off",
		"unicorn/prefer-switch": ["error", { emptyDefaultCase: "do-nothing-comment" }],
		"unicorn/prevent-abbreviations": "off",
		"wrap-iife": ["error", "inside", { functionPrototypeMethods: true }],
	},
};
