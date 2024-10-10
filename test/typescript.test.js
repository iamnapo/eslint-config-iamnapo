import test from "node:test";
import { strict as assert } from "node:assert";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = eslintConfigIamnapo.configs.typescript;
const filePattern = eslintConfigIamnapo.filePatterns.typescript;

test("load config in eslint to validate all rule syntax is correct", async () => {
	const linter = new Linter({ configType: "flat" });
	const code = `
		const foo = 1;
		const bar = () => {};
		bar(foo);
	`.replaceAll("\t", "");
	const errorCount = await linter.verify(
		code,
		config.map((cfg) => ({ ...cfg, files: [filePattern] })),
		fileURLToPath(new URL("typescript.test.ts", import.meta.url)),
	);
	assert.equal(errorCount.length, 1);
	assert.ok(errorCount.every(({ ruleId }) => ["@typescript-eslint/prefer-nullish-coalescing"].includes(ruleId)));
});
