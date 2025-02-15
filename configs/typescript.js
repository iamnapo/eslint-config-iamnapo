import tsEslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";

import defaultConfig from "./default.js";

/** @type {import("eslint").Linter.Config[]} */
const config = [
	...defaultConfig,
	eslintPluginImport.flatConfigs.typescript,
	...tsEslint.configs.recommendedTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			ecmaVersion: 15,
			parserOptions: {
				projectService: true,
			},
		},
	},
	{
		rules: {
			"import/no-unresolved": "off",
			"no-unused-vars": "off",
			"no-void": ["error", { allowAsStatement: true }],
			"require-await": "off",
			"@stylistic/type-annotation-spacing": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ disallowTypeAnnotations: false, fixStyle: "inline-type-imports" },
			],
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ args: "after-used", ignoreRestSiblings: true, vars: "all", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/prefer-nullish-coalescing": [
				"error",
				{ ignoreConditionalTests: true, ignorePrimitives: { number: true, bigint: true } },
			],
			"@typescript-eslint/require-await": "error",
		},
	},
];

export default config.map((cfg) => ({ ...cfg, name: "iamnapo/typescript" }));
