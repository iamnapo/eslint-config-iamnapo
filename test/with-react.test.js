const test = require("ava");
const { ESLint } = require("eslint");

const { env, plugins, rules } = require("../with-react");

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async (t) => {
	const linter = new ESLint({ useEslintrc: false, overrideConfigFile: "with-react.js" });
	const code = `
	import React from "react";
	import ReactDOM from "react-dom";

	const element = <h1>Hello, world</h1>;
	ReactDOM.render(element, document.querySelector("#root"));
	`.replace(/\t*/g, "");
	const { errorCount, messages } = (await linter.lintText(code))[0];
	t.is(errorCount, 2);
	t.true(messages.every((message) => message.ruleId === "import/no-unresolved"));
});

test("test basic properties of config", (t) => {
	t.true(isObject(env));
	t.true(Array.isArray(plugins));
	t.true(isObject(rules));
});
