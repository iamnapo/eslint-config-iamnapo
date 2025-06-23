import { strict as assert } from "node:assert";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";

import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = eslintConfigIamnapo.configs.default;
const filePattern = eslintConfigIamnapo.filePatterns.default;

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
		fileURLToPath(new URL("test.js", import.meta.url)),
	);
	assert.equal(errorCount.length, 0);
});
