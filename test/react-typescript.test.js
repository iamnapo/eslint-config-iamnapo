import test from "node:test";
import { strict as assert } from "node:assert";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = eslintConfigIamnapo.configs["react-typescript"];
const filePattern = eslintConfigIamnapo.filePatterns["react-typescript"];

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
		config.map((cfg) => ({ ...cfg, files: [filePattern] })),
		fileURLToPath(new URL("test.tsx", import.meta.url)),
	);
	assert.equal(errorCount.length, 6);
	assert.ok(
		errorCount.every(({ ruleId }) =>
			[
				"@typescript-eslint/prefer-nullish-coalescing",
				"@typescript-eslint/no-unsafe-assignment",
				"@typescript-eslint/no-unsafe-call",
				"@typescript-eslint/no-unsafe-member-access",
			].includes(ruleId)),
	);
});
