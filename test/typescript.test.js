import test from "node:test";
import { strict as assert } from "node:assert";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = eslintConfigIamnapo.configs.typescript;

test("load config in eslint to validate all rule syntax is correct", async () => {
	const linter = new Linter({ configType: "flat" });
	const code = `
		const foo = 1;
		const bar = () => {};
		bar(foo);
	`.replaceAll("\t", "");
	const errorCount = await linter.verify(
		code,
		[{ files: ["**/*.{c,m,}ts"] }, ...config],
		fileURLToPath(new URL("test.ts", import.meta.url)),
	);
	assert.equal(errorCount.length, 1);
	assert.ok(errorCount.every(({ ruleId }) => ["@typescript-eslint/prefer-nullish-coalescing"].includes(ruleId)));
});
