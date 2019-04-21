const test = require('ava');
const eslint = require('eslint');

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const { CLIEngine } = eslint;
  const cli = new CLIEngine({ useEslintrc: false, configFile: '.eslintrc.json' });
  const code = 'const foo = 1;\nconst bar = () => {};\nbar(foo);\n';
  t.is(cli.executeOnText(code).errorCount, 0);
});

test('test basic properties of config', (t) => {
  const { env, plugins, rules } = require('..');
  const isObject = value => value && typeof value === 'object' && value.constructor === Object;
  t.true(isObject(env));
  t.true(Array.isArray(plugins));
  t.true(isObject(rules));
});
