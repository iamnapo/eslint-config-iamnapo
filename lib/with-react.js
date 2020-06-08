module.exports = {
	extends: [
		"airbnb",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"./lib/default",
	],
	env: {
		browser: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
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
		"react-hooks/rules-of-hooks": "error",
		"react/destructuring-assignment": "off",
		"react/display-name": "off",
		"react/forbid-prop-types": "off",
		"react/jsx-curly-brace-presence": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-props-no-spreading": "off",
		"react/no-array-index-key": "off",
	},
};
