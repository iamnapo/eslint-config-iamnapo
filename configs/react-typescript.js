import reactConfig from "./react.js";
import typescriptConfig from "./typescript.js";

/** @type {import("eslint").Linter.Config[]} */
const config = [
	...reactConfig,
	...typescriptConfig,
	{
		rules: {
			"import-x/extensions": [
				"error",
				{
					ignorePackages: true,
					fix: true,
					checkTypeImports: true,
					pattern: { ts: "always", tsx: "always", json: "always" },
				},
			],
			"react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
		},
	},
];

export default config.map((cfg) => ({ ...cfg, name: "iamnapo/react-typescript" }));
