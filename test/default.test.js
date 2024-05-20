import test from "node:test";
import { strict as assert } from "node:assert";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = eslintConfigIamnapo.configs.default;

test("load config in eslint to validate all rule syntax is correct", async () => {
	const linter = new Linter({ configType: "flat" });
	const code = `
	const foo = 1;
	const bar = () => {};
	bar(foo);
	`.replaceAll("\t", "");
	const errorCount = await linter.verify(code, config, fileURLToPath(new URL("test.js", import.meta.url)));
	assert.equal(errorCount.length, 0);
});
