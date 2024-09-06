module.exports = {
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended"
  ],
  "globals": {
    "NODE_ENV": true,
    "API_URL_ENV": true,
    "VALIDATION_STATUS": true
  },
  "plugins": [
    "@typescript-eslint",
    "import"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "env": {
    "browser": true
  },
  "rules": {
    "arrow-parens": "warn",
    "max-len": "off",
    "no-console": 1,
    "no-trailing-spaces": 0,
    "no-mixed-operators": 0,
    "no-underscore-dangle": 0,
    "no-shadow": 0,
    "dot-notation": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "NavLink",
          "Link"
        ],
        "specialLink": [
          "to"
        ]
      }
    ],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx",
          ".jsx"
        ]
      }
    ],
    "react/forbid-prop-types": 0,
    "react/jsx-props-no-spreading": [
      "off"
    ],
    "react/prop-types": [
      1,
      {
        "skipUndeclared": true
      }
    ],
    "react/require-default-props": [
      1,
      {
        "ignoreFunctionalComponents": true
      }
    ],
    "jsx-a11y/click-events-have-key-events": 0,
    "@typescript-eslint/explicit-function-return-type": [
      1,
      {
        "allowExpressions": true
      }
    ],
    "@typescript-eslint/no-namespace": [
      1,
      {
        "allowDeclarations": true
      }
    ],
    "jsx-a11y/label-has-associated-control": 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-duplicate-imports": "off",
    "import/no-duplicates": "error",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "function-paren-newline": "off",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    }
  }
};
