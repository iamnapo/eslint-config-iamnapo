import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = [...eslintConfigIamnapo.configs.default, { rules: { "import/no-unresolved": "off" } }];

export default config;
