import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

import defaultConfig from "./default.js";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {import("eslint").Linter.Config[]} */
const config = [
	...compat.extends("airbnb", "airbnb/hooks").map(({ plugins, ...cfg }) => cfg),
	eslintPluginReact.configs.flat.recommended,
	eslintPluginReact.configs.flat["jsx-runtime"],
	eslintPluginJsxA11y.flatConfigs.recommended,
	...defaultConfig,
	{
		plugins: {
			"react-hooks": eslintPluginReactHooks,
		},
	},
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 15,
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: "999.999.999",
			},
		},
	},
	{
		rules: {
			"react-hooks/exhaustive-deps": "warn",
			"react/destructuring-assignment": "off",
			"react/display-name": "off",
			"react/forbid-prop-types": "off",
			"react/function-component-definition": "off",
			"react/hook-use-state": "error",
			"react/jsx-curly-brace-presence": ["error", { props: "never", children: "always" }],
			"react/jsx-indent": ["error", "tab", { checkAttributes: true, indentLogicalExpressions: true }],
			"react/jsx-indent-props": ["error", "tab"],
			"react/jsx-key": [
				"error",
				{
					checkFragmentShorthand: true,
					checkKeyMustBeforeSpread: true,
					warnOnDuplicates: true,
				},
			],
			"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
			"react/jsx-no-useless-fragment": "error",
			"react/jsx-props-no-spreading": "off",
			"react/jsx-sort-props": [
				"error",
				{
					callbacksLast: true,
					shorthandFirst: true,
					noSortAlphabetically: true,
					reservedFirst: true,
				},
			],
			"react/no-array-index-key": "off",
			"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
			"react/require-default-props": [
				"error",
				{
					forbidDefaultForRequired: true,
					ignoreFunctionalComponents: true,
				},
			],
			"unicorn/filename-case": ["error", { cases: { kebabCase: true, pascalCase: true } }],
		},
	},
];

export default config.map(cfg => ({ ...cfg, name: "iamnapo/react" }));
