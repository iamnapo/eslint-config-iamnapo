import { strict as assert } from "node:assert";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = eslintConfigIamnapo.configs.react;
const filePattern = eslintConfigIamnapo.filePatterns.react;

test("load config in eslint to validate all rule syntax is correct", async () => {
	const linter = new Linter({ configType: "flat" });
	const code = `
	import { createRoot } from "react-dom/client";

	const element = <h1>{"Hello, world"}</h1>;
	const root = createRoot(document.querySelector("#root"));
	root.render(element);
	`.replaceAll("\t", "");
	const errorCount = await linter.verify(
		code,
		[...config.map((cfg) => ({ ...cfg, files: [filePattern] })), { rules: { "import-x/no-unresolved": "off" } }],
		fileURLToPath(new URL("test.jsx", import.meta.url)),
	);
	assert.equal(errorCount.length, 0);
});
