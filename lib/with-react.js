/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	extends: [
		"airbnb",
		"airbnb/hooks",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"./lib/default",
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
		"import/extensions": ["error", "ignorePackages", { js: "never", mjs: "never", jsx: "never" }],
		"react-hooks/exhaustive-deps": "warn",
		"react/destructuring-assignment": "off",
		"react/display-name": "off",
		"react/forbid-prop-types": "off",
		"react/jsx-curly-brace-presence": ["error", { props: "never", children: "always" }],
		"react/jsx-filename-extension": "off",
		"react/jsx-indent": ["error", "tab", { checkAttributes: true, indentLogicalExpressions: true }],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-no-useless-fragment": "error",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-uses-react": "off",
		"react/no-array-index-key": "off",
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": ["error", { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
		"unicorn/filename-case": ["error", { cases: { kebabCase: true, pascalCase: true } }],
	},
};
