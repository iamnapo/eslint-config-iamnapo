import { defineConfig } from "eslint/config";

import { configTypeChecked as reactConfig } from "./react.js";
import typescriptConfig from "./typescript.js";

const config = defineConfig({
	name: "iamnapo/react-typescript",
	extends: [reactConfig, typescriptConfig],
});

export default config;
