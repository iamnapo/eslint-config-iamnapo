import reactConfig from "./react.js";
import { configReact as typescriptConfig } from "./typescript.js";

/** @type {import("eslint").Linter.Config[]} */
const config = [
	...reactConfig,
	...typescriptConfig,
];

export default config.map(cfg => ({ ...cfg, name: "iamnapo/react-typescript" }));
