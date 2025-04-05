import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = [...eslintConfigIamnapo.configs.default, { rules: { "import-x/no-unresolved": "off" } }];

export default config;
