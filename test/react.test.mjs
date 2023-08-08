import test from "node:test";
import { strict as assert } from "node:assert";

import { ESLint } from "eslint";

import config from "../react.js";

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async () => {
	const linter = new ESLint({ overrideConfigFile: "react.js", overrideConfig: { rules: { "import/no-unresolved": "off" } } });
	const code = `
	import { createRoot } from "react-dom/client";

	const element = <h1>{"Hello, world"}</h1>;
	const root = createRoot(document.querySelector("#root"));
	root.render(element);
	`.replaceAll("\t", "");
	const [{ errorCount }] = await linter.lintText(code);
	assert.equal(errorCount, 0);
});

test("test basic properties of config", () => {
	const { env, plugins, rules } = config;

	assert.ok(isObject(env));
	assert.ok(Array.isArray(plugins));
	assert.ok(isObject(rules));
});
