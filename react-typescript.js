import { FlatCompat } from "@eslint/eslintrc";

import reactConfig from "./react.js";
import typescriptConfig from "./typescript.js";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
	...reactConfig,
	...compat.extends("airbnb-typescript"),
	...typescriptConfig,
];

export default config;
