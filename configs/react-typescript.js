import { defineConfig } from "eslint/config";

import reactConfig from "./react.js";
import typescriptConfig from "./typescript.js";

const config = defineConfig({
	name: "iamnapo/react-typescript",
	extends: [reactConfig, typescriptConfig],
	rules: {
		"react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
	},
});

export default config;
