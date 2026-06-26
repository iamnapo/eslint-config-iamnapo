import eslintReact from "@eslint-react/eslint-plugin";
import { defineConfig } from "eslint/config";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y-x";
import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

import { configWithJsx as defaultConfig } from "./default.js";

const config = (isTypeChecked = false) =>
	defineConfig({
		name: "iamnapo/react",
		extends: [
			isTypeChecked ? eslintReact.configs["recommended-type-checked"] : eslintReact.configs.recommended,
			eslintPluginReactHooks.configs.flat["recommended-latest"],
			eslintReact.configs["disable-conflict-eslint-plugin-react-hooks"],
			eslintPluginJsxA11y.configs.recommended,
			defaultConfig,
		],
		plugins: { perfectionist: eslintPluginPerfectionist },
		languageOptions: {
			globals: globals.browser,
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
		rules: {
			"@eslint-react/dom-no-unknown-property": "error",
			"@eslint-react/jsx-no-useless-fragment": "error",
			"@eslint-react/no-array-index-key": "off",
			"@eslint-react/no-duplicate-key": "error",
			"@eslint-react/use-state": "error",
			"@stylistic/jsx-curly-brace-presence": ["error", { props: "never", children: "always" }],
			"perfectionist/sort-jsx-props": [
				"error",
				{
					type: "unsorted",
					groups: ["reserved", "shorthand", "unknown", "callback"],
					customGroups: [
						{ groupName: "reserved", elementNamePattern: "^(key|ref)$" },
						{ groupName: "shorthand", selector: "prop", modifiers: ["shorthand"] },
						{ groupName: "callback", elementNamePattern: "^on[A-Z]" },
					],
				},
			],
			"unicorn/filename-case": ["error", { cases: { kebabCase: true, pascalCase: true } }],
		},
	});

export const configTypeChecked = config(true);

export default config();
