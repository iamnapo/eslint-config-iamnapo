import eslintPluginImportX from "eslint-plugin-import-x";
import tsEslint from "typescript-eslint";

import defaultConfig from "./default.js";

/** @type {import("eslint").Linter.Config[]} */
const config = [
	...defaultConfig,
	...tsEslint.configs.recommendedTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	eslintPluginImportX.flatConfigs.recommended,
	eslintPluginImportX.flatConfigs.typescript,
	{
		settings: { "import-x/resolver": { node: true, typescript: true } },
		languageOptions: { parserOptions: { projectService: true } },
	},
	{
		rules: {
			"import-x/extensions": [
				"error",
				{ ignorePackages: true, fix: true, checkTypeImports: true, pattern: { ts: "never", json: "always" } },
			],
			"import-x/no-named-as-default-member": "off",
			"import-x/no-unresolved": "off",
			"no-shadow": "off",
			"no-use-before-define": "off",
			"no-unused-vars": "off",
			"no-void": ["error", { allowAsStatement: true }],
			"require-await": "off",
			"@stylistic/type-annotation-spacing": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/no-shadow": "error",
			"@typescript-eslint/no-use-before-define": ["error", { functions: false }],
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
