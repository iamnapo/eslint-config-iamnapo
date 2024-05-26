import defaultConfig from "./configs/default.js";
import reactConfig from "./configs/react.js";
import typescriptConfig from "./configs/typescript.js";
import reactTypescriptConfig from "./configs/react-typescript.js";

const eslintConfigIamnapo = {
	configs: {
		default: defaultConfig,
		react: reactConfig,
		typescript: typescriptConfig,
		"react-typescript": reactTypescriptConfig,
	},
	filePatterns: {
		default: "**/*.{c,m,}js",
		react: "**/*.{c,m,}js{x,}",
		typescript: "**/*.{c,m,}ts",
		"react-typescript": "**/*.{c,m,}ts{x,}",
	},
};

export default eslintConfigIamnapo;
