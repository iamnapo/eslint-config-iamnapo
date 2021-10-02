import test from "ava";
import { ESLint } from "eslint";

import config from "../typescript.js";

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async (t) => {
	const linter = new ESLint({ overrideConfigFile: "typescript.js" });
	const code = `
	const foo = 1;
	const bar = () => {};
	bar(foo);
	`.replace(/\t*/g, "");
	const { errorCount } = (await linter.lintText(code))[0];
	t.is(errorCount, 1);
});

test("test basic properties of config", (t) => {
	const { plugins, rules } = config;

	t.true(Array.isArray(plugins));
	t.true(isObject(rules));
});
