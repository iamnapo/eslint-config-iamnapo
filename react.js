/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	extends: [
		"airbnb",
		"airbnb/hooks",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"./index",
	],
	env: {
		browser: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "jsx-a11y", "react-hooks"],
	settings: {
		react: {
			version: "999.999.999",
		},
	},
	rules: {
		"react-hooks/exhaustive-deps": "warn",
		"react/destructuring-assignment": "off",
		"react/display-name": "off",
		"react/forbid-prop-types": "off",
		"react/function-component-definition": "off",
		"react/hook-use-state": "error",
		"react/jsx-curly-brace-presence": ["error", { props: "never", children: "always" }],
		"react/jsx-indent": ["error", "tab", { checkAttributes: true, indentLogicalExpressions: true }],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-key": ["error", { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }],
		"react/jsx-no-useless-fragment": "error",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-sort-props": ["error", { callbacksLast: true, shorthandFirst: true, noSortAlphabetically: true, reservedFirst: true }],
		"react/jsx-uses-react": "off",
		"react/no-array-index-key": "off",
		"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": ["error", { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
		"unicorn/filename-case": ["error", { cases: { kebabCase: true, pascalCase: true } }],
	},
};
