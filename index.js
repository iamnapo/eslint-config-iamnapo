import defaultConfig from "./default.js";
import reactConfig from "./react.js";
import typescriptConfig from "./typescript.js";
import reactTypescriptConfig from "./react-typescript.js";

const eslintConfigIamnapo = {
	configs: {
		default: defaultConfig,
		react: reactConfig,
		typescript: typescriptConfig,
		"react-typescript": reactTypescriptConfig,
	},
};

export default eslintConfigIamnapo;
