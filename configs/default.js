import globals from "globals";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginImport from "eslint-plugin-import";
import eslintJs from "@eslint/js";

/** @type {(jsx?: boolean) => import("eslint").Linter.Config[]} */
const config = (jsx = false) => [
	eslintJs.configs.recommended,
	eslintPluginImport.flatConfigs.recommended,
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
	{
		linterOptions: { reportUnusedDisableDirectives: "error" },
		languageOptions: { ecmaVersion: "latest", globals: globals.nodeBuiltin },
	},
	{
		rules: {
			"@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
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
			"@stylistic/padding-line-between-statements": ["error", { blankLine: "always", prev: "multiline-block-like", next: "*" }],
			"@stylistic/quotes": ["error", "double", { allowTemplateLiterals: "avoidEscape" }],
			"@stylistic/space-before-blocks": "error",
			"@stylistic/space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
			"@stylistic/space-infix-ops": "error",
			"@stylistic/wrap-iife": ["error", "inside", { functionPrototypeMethods: true }],
			"array-callback-return": ["error", { allowImplicit: true }],
			"func-names": ["error", "never"],
			"import/default": "off",
			"import/extensions": ["error", "ignorePackages", { ts: "never", tsx: "never" }],
			"import/namespace": "off",
			"import/no-anonymous-default-export": "error",
			"import/no-duplicates": ["error", { considerQueryString: true, "prefer-inline": true }],
			"import/no-named-as-default": "off",
			"import/no-named-as-default-member": "off",
			"import/order": ["error", { "newlines-between": "always" }],
			"import/prefer-default-export": "off",
			"no-implicit-coercion": "error",
			"no-negated-condition": "error",
			"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
			"no-restricted-exports": ["error", { restrictedNamedExports: ["then"] }],
			"no-return-assign": ["error", "always"],
			"no-unused-vars": ["error", { args: "after-used", ignoreRestSiblings: true, vars: "all", varsIgnorePattern: "^_" }],
			"no-use-before-define": ["error", { functions: false }],
			"prefer-const": ["error", { ignoreReadBeforeAssign: true }],
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

export const configWithJsx = config(true);

export default config().map((cfg) => ({ ...cfg, name: "iamnapo/default" }));
