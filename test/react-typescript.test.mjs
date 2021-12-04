import test from "ava";
import { ESLint } from "eslint";

import config from "../react-typescript.js";

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async (t) => {
	const linter = new ESLint({ overrideConfigFile: "react-typescript.js", overrideConfig: { rules: { "import/no-unresolved": "off" } } });
	const code = `
	import ReactDOM from "react-dom";

	const element = <h1>{"Hello, world"}</h1>;
	ReactDOM.render(element, document.querySelector("#root"));
	`.replace(/\t*/g, "");
	const [{ errorCount }] = await linter.lintText(code);
	t.is(errorCount, 1);
});

test("test basic properties of config", (t) => {
	const { plugins, rules } = config;

	t.true(Array.isArray(plugins));
	t.true(isObject(rules));
});
