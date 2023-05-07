import test from "node:test";
import assert from "node:assert";

import { ESLint } from "eslint";

import config from "../typescript.js";

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async () => {
	const linter = new ESLint({ overrideConfigFile: "typescript.js" });
	const code = `
	const foo = 1;
	const bar = () => {};
	bar(foo);
	`.replaceAll("\t", "");
	const [{ errorCount }] = await linter.lintText(code);
	assert.equal(errorCount, 1);
});

test("test basic properties of config", () => {
	const { plugins, rules } = config;

	assert.ok(Array.isArray(plugins));
	assert.ok(isObject(rules));
});
