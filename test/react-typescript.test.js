import { strict as assert } from "node:assert";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";

import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = eslintConfigIamnapo.configs["react-typescript"];
const filePattern = eslintConfigIamnapo.filePatterns["react-typescript"];

test("load config in eslint to validate all rule syntax is correct", () => {
	const linter = new Linter();
	const code = `
	import { createRoot } from "react-dom/client";

	const element = <h1>{"Hello, world"}</h1>;
	const root = createRoot(document.querySelector("#root"));
	root.render(element);
	`.replaceAll("\t", "");
	const errorCount = linter.verify(
		code,
		config.map((cfg) => ({ ...cfg, files: [filePattern] })),
		fileURLToPath(new URL("react-typescript.test.tsx", import.meta.url)),
	);
	assert.equal(errorCount.length, 5);
	assert.ok(errorCount.every(({ ruleId }) => [
		"@typescript-eslint/no-unsafe-assignment",
		"@typescript-eslint/no-unsafe-call",
		"@typescript-eslint/no-unsafe-member-access",
	].includes(ruleId)));
});
