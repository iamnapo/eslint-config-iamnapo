import { FlatCompat } from "@eslint/eslintrc";
import tsEslint from "typescript-eslint";
import eslintPluginStylistic from "@stylistic/eslint-plugin";

import defaultConfig from "./default.js";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {(reactSupport?: boolean) => import("eslint").Linter.Config[]} */
const config = (reactSupport = false) => [
	...defaultConfig,
	...compat.extends(`airbnb-typescript${reactSupport ? "" : "/base"}`).map(({ plugins, ...cfg }) => {
		if (cfg.rules?.["@typescript-eslint/no-throw-literal"]) {
			cfg.rules["@typescript-eslint/only-throw-error"] = cfg.rules["@typescript-eslint/no-throw-literal"];
			delete cfg.rules?.["@typescript-eslint/no-throw-literal"];
		}

		return cfg;
	}),
	...tsEslint.configs.recommendedTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	eslintPluginStylistic.configs["disable-legacy"],
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
			"no-void": ["error", { allowAsStatement: true }],
			"@stylistic/member-delimiter-style": ["error", { multiline: { delimiter: "semi", requireLast: true }, singleline: { delimiter: "semi", requireLast: false } }],
			"@stylistic/type-annotation-spacing": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ disallowTypeAnnotations: false, fixStyle: "inline-type-imports" },
			],
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/prefer-nullish-coalescing": ["error", { ignoreConditionalTests: true, ignorePrimitives: { number: true, bigint: true } }],
		},
	},
];

export const configReact = config(true);
export default config(false).map(cfg => ({ ...cfg, name: "iamnapo/typescript" }));
