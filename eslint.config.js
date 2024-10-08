import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint, { parser } from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];

module.exports = {
  root: true,
  env:{
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides:[],
  parser: "@typescript-eslint/parser",
  settings:{
    react:{
      version: "detect",
    },
  },
  parserOptions:{
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ["react", "@typescript-eslint",'react-hooks','unused-imports'],
  rules:{
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    'react/react-in-jsx-scope': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      }
    ],
  }
}