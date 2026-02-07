import eslintJs from "@eslint/js";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import eslintPluginImportX from "eslint-plugin-import-x";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

const config = (jsx = false) =>
	defineConfig({
		name: "iamnapo/default",
		extends: [
			eslintJs.configs.recommended,
			eslintPluginImportX.flatConfigs.recommended,
			eslintPluginUnicorn.configs.recommended,
			eslintPluginStylistic.configs.customize({
				arrowParens: true,
				commaDangle: "always-multiline",
				indent: "tab",
				braceStyle: "1tbs",
				quoteProps: "as-needed",
				quotes: "double",
				semi: true,
				jsx,
			}),
		],
		linterOptions: { reportUnusedDisableDirectives: "error" },
		languageOptions: { ecmaVersion: "latest", globals: globals.nodeBuiltin },
		rules: {
			"@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
			"@stylistic/comma-spacing": "error",
			"@stylistic/function-call-spacing": "error",
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
			"@stylistic/max-statements-per-line": "off",
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
			"@stylistic/quotes": ["error", "double", { allowTemplateLiterals: "avoidEscape" }],
			"@stylistic/space-before-blocks": "error",
			"@stylistic/space-before-function-paren": [
				"error",
				{ anonymous: "always", named: "never", asyncArrow: "always" },
			],
			"@stylistic/space-infix-ops": "error",
			"@stylistic/wrap-iife": ["error", "inside", { functionPrototypeMethods: true }],
			"array-callback-return": ["error", { allowImplicit: true }],
			eqeqeq: ["error", "always", { null: "ignore" }],
			"func-names": ["error", "never"],
			"import-x/default": "off",
			"import-x/extensions": ["error", "ignorePackages", { fix: true, checkTypeImports: true }],
			"import-x/namespace": "off",
			"import-x/no-anonymous-default-export": "error",
			"import-x/no-duplicates": ["error", { considerQueryString: true, "prefer-inline": true }],
			"import-x/no-named-as-default": "off",
			"import-x/no-named-as-default-member": "off",
			"import-x/order": [
				"error",
				{
					"newlines-between": "always",
					distinctGroup: true,
					named: { enabled: true, types: "types-last" },
					alphabetize: { order: "asc", orderImportKind: "asc", caseInsensitive: true },
					pathGroupsExcludedImportTypes: [],
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
					sortTypesGroup: true,
					pathGroups: [
						{ pattern: "#assets/**", group: "internal" },
						{ pattern: "#constants/**", group: "internal", position: "after" },
						{ pattern: "#contexts/**", group: "internal", position: "after" },
						{ pattern: "#components/**", group: "internal", position: "after" },
						{ pattern: "#hooks/**", group: "internal", position: "after" },
						{ pattern: "#styles/**", group: "internal", position: "after" },
						{ pattern: "#utils/**", group: "internal", position: "after" },
					],
				},
			],
			"import-x/prefer-default-export": "off",
			"no-implicit-coercion": "error",
			"no-negated-condition": "error",
			"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
			"no-restricted-exports": ["error", { restrictedNamedExports: ["then"] }],
			"no-return-assign": ["error", "always"],
			"no-unused-vars": [
				"error",
				{ args: "after-used", ignoreRestSiblings: true, vars: "all", varsIgnorePattern: "^_" },
			],
			"no-shadow": "error",
			"no-use-before-define": ["error", { functions: false }],
			"object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
			"one-var": ["error", "never"],
			"prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],
			"prefer-const": ["error", { ignoreReadBeforeAssign: true }],
			"prefer-regex-literals": "error",
			"prefer-template": "error",
			"require-await": "error",
			"unicorn/consistent-destructuring": "error",
			"unicorn/no-array-callback-reference": "off",
			"unicorn/no-nested-ternary": "off",
			"unicorn/no-null": "off",
			"unicorn/prefer-switch": ["error", { emptyDefaultCase: "do-nothing-comment" }],
			"unicorn/prevent-abbreviations": "off",
			"unicorn/prefer-import-meta-properties": "error",
		},
	});

export const configWithJsx = config(true);

export default config();
