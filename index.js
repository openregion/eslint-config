import eslintReact from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import importX from "eslint-plugin-import-x";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
import { legacyAirbnbRules } from "./rules/legacy-airbnb-rules.js";

const sourceFiles = ["**/*.{js,mjs,cjs,jsx,ts,tsx}"];
const tsFiles = ["**/*.{ts,tsx}"];
const jsxFiles = ["**/*.{jsx,tsx}"];

const projectGlobals = {
  NODE_ENV: "readonly",
  API_URL_ENV: "readonly",
  VALIDATION_STATUS: "readonly",
};

const localBaseRules = {
  ...legacyAirbnbRules,
  "no-console": "warn",
  "no-underscore-dangle": "off",
  "no-shadow": "off",
  "dot-notation": "off",
  "no-use-before-define": "off",
  "no-unused-vars": "off",
  "no-duplicate-imports": "off",
  "@stylistic/arrow-parens": "warn",
  "@stylistic/max-len": "off",
  "@stylistic/no-trailing-spaces": "off",
  "@stylistic/no-mixed-operators": "off",
  "@stylistic/implicit-arrow-linebreak": "off",
  "@stylistic/space-before-function-paren": "off",
  "@stylistic/function-paren-newline": "off",
  "@stylistic/object-property-newline": [
    "error",
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],
  "import-x/no-unresolved": "off",
  "import-x/extensions": "off",
  "import-x/prefer-default-export": "off",
  "import-x/no-cycle": [
    "error",
    {
      ignoreExternal: false,
      allowUnsafeDynamicCyclicDependency: false,
    },
  ],
  "import-x/no-duplicates": "error",
};

const localTypeScriptRules = {
  "@typescript-eslint/explicit-function-return-type": [
    "warn",
    {
      allowExpressions: true,
    },
  ],
  "@typescript-eslint/no-namespace": [
    "warn",
    {
      allowDeclarations: true,
    },
  ],
  "@typescript-eslint/no-use-before-define": "error",
  "@typescript-eslint/no-unused-vars": "warn",
};

const scopedTypeScriptConfigs = tseslint.configs.recommended.map((config) => ({
  ...config,
  files: tsFiles,
}));

export default defineConfig([
  js.configs.recommended,
  importX.flatConfigs.recommended,
  {
    files: sourceFiles,
    plugins: {
      "@stylistic": stylistic,
      "import-x": importX,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...projectGlobals,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: localBaseRules,
  },
  ...scopedTypeScriptConfigs,
  {
    files: tsFiles,
    extends: [
      importX.flatConfigs.typescript,
    ],
    rules: localTypeScriptRules,
  },
  {
    files: jsxFiles,
    extends: [
      eslintReact.configs.jsx,
      eslintReact.configs.dom,
      reactHooks.configs.flat.recommended,
    ],
  },
]);
