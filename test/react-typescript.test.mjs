import test from "node:test";
import assert from "node:assert";

import { ESLint } from "eslint";

import config from "../react-typescript.js";

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async () => {
	const linter = new ESLint({ overrideConfigFile: "react-typescript.js", overrideConfig: { rules: { "import/no-unresolved": "off" } } });
	const code = `
	import ReactDOM from "react-dom";

	const element = <h1>{"Hello, world"}</h1>;
	ReactDOM.render(element, document.querySelector("#root"));
	`.replaceAll("\t", "");
	const [{ errorCount }] = await linter.lintText(code);
	assert.equal(errorCount, 1);
});

test("test basic properties of config", () => {
	const { plugins, rules } = config;

	assert.ok(Array.isArray(plugins));
	assert.ok(isObject(rules));
});
