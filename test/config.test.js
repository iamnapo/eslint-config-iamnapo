const test = require('tape');
const eslint = require('eslint');

const config = require('../');

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const { CLIEngine } = eslint;

  const cli = new CLIEngine({ useEslintrc: false, configFile: '.eslintrc.json' });

  const code = 'const foo = 1;\nconst bar = () => {};\nbar(foo);\n';
  t.equal(cli.executeOnText(code).errorCount, 0);
  t.end();
});

test('test basic properties of config', (t) => {
  t.ok(isObject(config.env));
  t.ok(isObject(config.plugins));
  t.ok(isObject(config.rules));
  t.end();
});

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}
