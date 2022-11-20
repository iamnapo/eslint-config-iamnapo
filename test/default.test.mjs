import test from "ava";
import { ESLint } from "eslint";

import config from "../index.js";

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async (t) => {
	const linter = new ESLint();
	const code = `
	const foo = 1;
	const bar = () => {};
	bar(foo);
	`.replaceAll("\t", "");
	const [{ errorCount }] = await linter.lintText(code);
	t.is(errorCount, 0);
});

test("test basic properties of config", (t) => {
	const { env, plugins, rules } = config;

	t.true(isObject(env));
	t.true(Array.isArray(plugins));
	t.true(isObject(rules));
});
