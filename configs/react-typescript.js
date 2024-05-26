import reactConfig from "./react.js";
import { configReact as typescriptConfig } from "./typescript.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
	...reactConfig,
	...typescriptConfig,
];

export default config;
