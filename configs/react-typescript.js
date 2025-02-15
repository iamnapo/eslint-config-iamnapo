import reactConfig from "./react.js";
import typescriptConfig from "./typescript.js";

/** @type {import("eslint").Linter.Config[]} */
const config = [
	...reactConfig,
	...typescriptConfig,
	{
		settings: {
			"import/resolver": {
				node: {
					extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts"],
				},
			},
		},
		rules: {
			"react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
		},
	},
];

export default config.map((cfg) => ({ ...cfg, name: "iamnapo/react-typescript" }));
