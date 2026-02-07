import { defineConfig } from "eslint/config";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

import { configWithJsx as defaultConfig } from "./default.js";

const config = defineConfig({
	name: "iamnapo/react",
	extends: [
		eslintPluginReact.configs.flat.recommended,
		eslintPluginReact.configs.flat["jsx-runtime"],
		eslintPluginReactHooks.configs.flat["recommended-latest"],
		eslintPluginJsxA11y.flatConfigs.recommended,
		defaultConfig,
	],
	languageOptions: { globals: globals.browser },
	settings: { react: { version: "999.999.999" } },
	rules: {
		"@stylistic/jsx-curly-brace-presence": ["error", { props: "never", children: "always" }],
		"@stylistic/jsx-sort-props": [
			"error",
			{ callbacksLast: true, shorthandFirst: true, noSortAlphabetically: true, reservedFirst: true },
		],
		"react/display-name": "off",
		"react/hook-use-state": "error",
		"react/jsx-key": [
			"error",
			{ checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true },
		],
		"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
		"react/jsx-no-useless-fragment": "error",
		"react/no-unknown-property": "error",
		"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
		"react/require-default-props": ["error", { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
		"unicorn/filename-case": ["error", { cases: { kebabCase: true, pascalCase: true } }],
	},
});

export default config;
