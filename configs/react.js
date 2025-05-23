import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

import { configWithJsx as defaultConfig } from "./default.js";

/** @type {import("eslint").Linter.Config[]} */
const config = [
	eslintPluginReact.configs.flat.recommended,
	eslintPluginReact.configs.flat["jsx-runtime"],
	eslintPluginReactHooks.configs["recommended-latest"],
	eslintPluginJsxA11y.flatConfigs.recommended,
	...defaultConfig,
	{ languageOptions: { globals: globals.browser }, settings: { react: { version: "999.999.999" } } },
	{
		rules: {
			"@stylistic/jsx-curly-brace-presence": ["error", { props: "never", children: "always" }],
			"react/display-name": "off",
			"react/hook-use-state": "error",
			"react/jsx-indent": ["error", "tab", { checkAttributes: true, indentLogicalExpressions: true }],
			"react/jsx-indent-props": ["error", "tab"],
			"react/jsx-key": [
				"error",
				{ checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true },
			],
			"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
			"react/jsx-no-useless-fragment": "error",
			"react/jsx-sort-props": [
				"error",
				{ callbacksLast: true, shorthandFirst: true, noSortAlphabetically: true, reservedFirst: true },
			],
			"react/no-unknown-property": "error",
			"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
			"react/require-default-props": ["error", { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
			"unicorn/filename-case": ["error", { cases: { kebabCase: true, pascalCase: true } }],
		},
	},
];

export default config.map((cfg) => ({ ...cfg, name: "iamnapo/react" }));
