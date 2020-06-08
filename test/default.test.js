const test = require("ava");
const { ESLint } = require("eslint");

const { env, plugins, rules } = require("..");

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("load config in eslint to validate all rule syntax is correct", async (t) => {
	const linter = new ESLint({ useEslintrc: false, overrideConfigFile: "index.js" });
	const code = `
	const foo = 1;
	const bar = () => {};
	bar(foo);
	`.replace(/\t*/g, "");
	const { errorCount } = (await linter.lintText(code))[0];
	t.is(errorCount, 0);
});

test("test basic properties of config", (t) => {
	t.true(isObject(env));
	t.true(Array.isArray(plugins));
	t.true(isObject(rules));
});
