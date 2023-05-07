import test from "node:test";
import assert from "node:assert";

import { ESLint } from "eslint";

import config from "../react.js";

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async () => {
	const linter = new ESLint({ overrideConfigFile: "react.js", overrideConfig: { rules: { "import/no-unresolved": "off" } } });
	const code = `
	import ReactDOM from "react-dom";

	const element = <h1>{"Hello, world"}</h1>;
	ReactDOM.render(element, document.querySelector("#root"));
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
