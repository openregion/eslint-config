// Generated from the legacy Airbnb-derived effective config during the ESLint 10 migration.
// Keep local overrides in index.js so they remain easy to audit.
export const legacyAirbnbRules = {
  "@stylistic/arrow-parens": [
    "warn",
    "always"
  ],
  "@stylistic/max-len": [
    "off",
    100,
    2,
    {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }
  ],
  "no-console": [
    1
  ],
  "@stylistic/no-trailing-spaces": [
    0,
    {
      "skipBlankLines": false,
      "ignoreComments": false
    }
  ],
  "@stylistic/no-mixed-operators": [
    0,
    {
      "groups": [
        [
          "%",
          "**"
        ],
        [
          "%",
          "+"
        ],
        [
          "%",
          "-"
        ],
        [
          "%",
          "*"
        ],
        [
          "%",
          "/"
        ],
        [
          "/",
          "*"
        ],
        [
          "&",
          "|",
          "<<",
          ">>",
          ">>>"
        ],
        [
          "==",
          "!=",
          "===",
          "!=="
        ],
        [
          "&&",
          "||"
        ]
      ],
      "allowSamePrecedence": false
    }
  ],
  "no-underscore-dangle": [
    0,
    {
      "allow": [
        "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
      ],
      "allowAfterThis": false,
      "allowAfterSuper": false,
      "enforceInMethodNames": true,
      "allowAfterThisConstructor": false,
      "allowFunctionParams": true,
      "enforceInClassFields": false,
      "allowInArrayDestructuring": true,
      "allowInObjectDestructuring": true
    }
  ],
  "no-shadow": [
    0
  ],
  "dot-notation": [
    0,
    {
      "allowKeywords": true,
      "allowPattern": ""
    }
  ],
  "import-x/no-unresolved": [
    0,
    {
      "commonjs": true,
      "caseSensitive": true,
      "caseSensitiveStrict": false
    }
  ],
  "import-x/extensions": [
    0,
    "ignorePackages",
    {
      "js": "never",
      "mjs": "never",
      "jsx": "never"
    }
  ],
  "@stylistic/implicit-arrow-linebreak": [
    "off",
    "beside"
  ],
  "import-x/prefer-default-export": [
    0
  ],
  "no-use-before-define": [
    "off",
    {
      "functions": true,
      "classes": true,
      "variables": true
    }
  ],
  "no-unused-vars": [
    "off",
    {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": true
    }
  ],
  "no-duplicate-imports": [
    "off"
  ],
  "import-x/no-duplicates": [
    "error"
  ],
  "@stylistic/space-before-function-paren": [
    "off",
    {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }
  ],
  "@stylistic/function-paren-newline": [
    "off",
    "multiline-arguments"
  ],
  "no-array-constructor": [
    "off"
  ],
  "no-unused-expressions": [
    "off",
    {
      "allowShortCircuit": false,
      "allowTernary": false,
      "allowTaggedTemplates": false,
      "enforceForJSX": false
    }
  ],
  "constructor-super": [
    "off"
  ],
  "getter-return": [
    "off",
    {
      "allowImplicit": true
    }
  ],
  "no-const-assign": [
    "off"
  ],
  "no-dupe-args": [
    "off"
  ],
  "no-dupe-class-members": [
    "off"
  ],
  "no-dupe-keys": [
    "off"
  ],
  "no-func-assign": [
    "off"
  ],
  "no-import-assign": [
    "off"
  ],
  "no-new-symbol": [
    "off"
  ],
  "no-new-native-nonconstructor": [
    "off"
  ],
  "no-obj-calls": [
    "off"
  ],
  "no-redeclare": [
    "off"
  ],
  "no-setter-return": [
    "off"
  ],
  "no-this-before-super": [
    "off"
  ],
  "no-undef": [
    "off"
  ],
  "no-unreachable": [
    "off"
  ],
  "no-unsafe-negation": [
    "off"
  ],
  "no-var": [
    "error"
  ],
  "prefer-const": [
    "error",
    {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }
  ],
  "prefer-rest-params": [
    "error"
  ],
  "prefer-spread": [
    "error"
  ],
  "@stylistic/jsx-quotes": [
    "error",
    "prefer-double"
  ],
  "class-methods-use-this": [
    "error",
    {
      "exceptMethods": [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "componentDidCatch",
        "getSnapshotBeforeUpdate"
      ],
      "enforceForClassFields": true
    }
  ],
  "strict": [
    "error",
    "never"
  ],
  "import-x/named": [
    "error"
  ],
  "import-x/default": [
    "off"
  ],
  "import-x/namespace": [
    "off"
  ],
  "import-x/export": [
    "error"
  ],
  "import-x/no-named-as-default": [
    "error"
  ],
  "import-x/no-named-as-default-member": [
    "error"
  ],
  "import-x/no-deprecated": [
    "off"
  ],
  "import-x/no-extraneous-dependencies": [
    "error",
    {
      "devDependencies": [
        "test/**",
        "tests/**",
        "spec/**",
        "**/__tests__/**",
        "**/__mocks__/**",
        "test.{js,jsx}",
        "test-*.{js,jsx}",
        "**/*{.,_}{test,spec}.{js,jsx}",
        "**/jest.config.js",
        "**/jest.setup.js",
        "**/vue.config.js",
        "**/webpack.config.js",
        "**/webpack.config.*.js",
        "**/rollup.config.js",
        "**/rollup.config.*.js",
        "**/gulpfile.js",
        "**/gulpfile.*.js",
        "**/Gruntfile{,.js}",
        "**/protractor.conf.js",
        "**/protractor.conf.*.js",
        "**/karma.conf.js",
        "**/.eslintrc.js"
      ],
      "optionalDependencies": false
    }
  ],
  "import-x/no-mutable-exports": [
    "error"
  ],
  "import-x/no-commonjs": [
    "off"
  ],
  "import-x/no-amd": [
    "error"
  ],
  "import-x/no-nodejs-modules": [
    "off"
  ],
  "import-x/first": [
    "error"
  ],
  "import-x/imports-first": [
    "off"
  ],
  "import-x/no-namespace": [
    "off"
  ],
  "import-x/order": [
    "error",
    {
      "groups": [
        [
          "builtin",
          "external",
          "internal"
        ]
      ],
      "distinctGroup": true,
      "warnOnUnassignedImports": false
    }
  ],
  "import-x/newline-after-import": [
    "error"
  ],
  "import-x/no-restricted-paths": [
    "off"
  ],
  "import-x/max-dependencies": [
    "off",
    {
      "max": 10
    }
  ],
  "import-x/no-absolute-path": [
    "error"
  ],
  "import-x/no-dynamic-require": [
    "error"
  ],
  "import-x/no-internal-modules": [
    "off",
    {
      "allow": []
    }
  ],
  "import-x/unambiguous": [
    "off"
  ],
  "import-x/no-webpack-loader-syntax": [
    "error"
  ],
  "import-x/no-unassigned-import": [
    "off"
  ],
  "import-x/no-named-default": [
    "error"
  ],
  "import-x/no-anonymous-default-export": [
    "off",
    {
      "allowArray": false,
      "allowArrowFunction": false,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowLiteral": false,
      "allowObject": false
    }
  ],
  "import-x/exports-last": [
    "off"
  ],
  "import-x/group-exports": [
    "off"
  ],
  "import-x/no-default-export": [
    "off"
  ],
  "import-x/no-named-export": [
    "off"
  ],
  "import-x/no-self-import": [
    "error"
  ],
  "import-x/no-cycle": [
    "error",
    {
      "maxDepth": "∞",
      "ignoreExternal": false,
      "allowUnsafeDynamicCyclicDependency": false,
      "disableScc": false
    }
  ],
  "import-x/no-useless-path-segments": [
    "error",
    {
      "commonjs": true
    }
  ],
  "import-x/dynamic-import-chunkname": [
    "off",
    {
      "importFunctions": [],
      "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+"
    }
  ],
  "import-x/no-relative-parent-imports": [
    "off"
  ],
  "import-x/no-unused-modules": [
    "off",
    {
      "ignoreExports": [],
      "missingExports": true,
      "unusedExports": true
    }
  ],
  "import-x/no-import-module-exports": [
    "error",
    {
      "exceptions": []
    }
  ],
  "import-x/no-relative-packages": [
    "error"
  ],
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      "requireReturnForObjectLiteral": false
    }
  ],
  "@stylistic/arrow-spacing": [
    "error",
    {
      "before": true,
      "after": true
    }
  ],
  "@stylistic/generator-star-spacing": [
    "error",
    {
      "before": false,
      "after": true
    }
  ],
  "no-class-assign": [
    "error"
  ],
  "@stylistic/no-confusing-arrow": [
    "error",
    {
      "allowParens": true,
      "onlyOneSimpleParam": false
    }
  ],
  "no-restricted-exports": [
    "error",
    {
      "restrictedNamedExports": [
        "default",
        "then"
      ]
    }
  ],
  "no-restricted-imports": [
    "off",
    {
      "paths": [],
      "patterns": []
    }
  ],
  "no-useless-computed-key": [
    "error"
  ],
  "no-useless-constructor": [
    "error"
  ],
  "no-useless-rename": [
    "error",
    {
      "ignoreDestructuring": false,
      "ignoreImport": false,
      "ignoreExport": false
    }
  ],
  "object-shorthand": [
    "error",
    "always",
    {
      "ignoreConstructors": false,
      "avoidQuotes": true
    }
  ],
  "prefer-arrow-callback": [
    "error",
    {
      "allowNamedFunctions": false,
      "allowUnboundThis": true
    }
  ],
  "prefer-destructuring": [
    "error",
    {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": false
      }
    },
    {
      "enforceForRenamedProperties": false
    }
  ],
  "prefer-numeric-literals": [
    "error"
  ],
  "prefer-reflect": [
    "off"
  ],
  "prefer-template": [
    "error"
  ],
  "require-yield": [
    "error"
  ],
  "@stylistic/rest-spread-spacing": [
    "error",
    "never"
  ],
  "sort-imports": [
    "off",
    {
      "ignoreCase": false,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": [
        "none",
        "all",
        "multiple",
        "single"
      ]
    }
  ],
  "symbol-description": [
    "error"
  ],
  "@stylistic/template-curly-spacing": [
    "error"
  ],
  "@stylistic/yield-star-spacing": [
    "error",
    "after"
  ],
  "init-declarations": [
    "off"
  ],
  "no-catch-shadow": [
    "off"
  ],
  "no-delete-var": [
    "error"
  ],
  "no-label-var": [
    "error"
  ],
  "no-restricted-globals": [
    "error",
    {
      "name": "isFinite",
      "message": "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"
    },
    {
      "name": "isNaN",
      "message": "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"
    },
    "addEventListener",
    "blur",
    "close",
    "closed",
    "confirm",
    "defaultStatus",
    "defaultstatus",
    "event",
    "external",
    "find",
    "focus",
    "frameElement",
    "frames",
    "history",
    "innerHeight",
    "innerWidth",
    "length",
    "location",
    "locationbar",
    "menubar",
    "moveBy",
    "moveTo",
    "name",
    "onblur",
    "onerror",
    "onfocus",
    "onload",
    "onresize",
    "onunload",
    "open",
    "opener",
    "opera",
    "outerHeight",
    "outerWidth",
    "pageXOffset",
    "pageYOffset",
    "parent",
    "print",
    "removeEventListener",
    "resizeBy",
    "resizeTo",
    "screen",
    "screenLeft",
    "screenTop",
    "screenX",
    "screenY",
    "scroll",
    "scrollbars",
    "scrollBy",
    "scrollTo",
    "scrollX",
    "scrollY",
    "self",
    "status",
    "statusbar",
    "stop",
    "toolbar",
    "top"
  ],
  "no-shadow-restricted-names": [
    "error"
  ],
  "no-undef-init": [
    "error"
  ],
  "no-undefined": [
    "off"
  ],
  "@stylistic/array-bracket-newline": [
    "off",
    "consistent"
  ],
  "@stylistic/array-element-newline": [
    "off",
    {
      "multiline": true,
      "minItems": 3
    }
  ],
  "@stylistic/array-bracket-spacing": [
    "error",
    "never"
  ],
  "@stylistic/block-spacing": [
    "error",
    "always"
  ],
  "@stylistic/brace-style": [
    "error",
    "1tbs",
    {
      "allowSingleLine": true
    }
  ],
  "camelcase": [
    "error",
    {
      "properties": "never",
      "ignoreDestructuring": false,
      "ignoreImports": false,
      "ignoreGlobals": false
    }
  ],
  "capitalized-comments": [
    "off",
    "never",
    {
      "line": {
        "ignorePattern": ".*",
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true
      },
      "block": {
        "ignorePattern": ".*",
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true
      }
    }
  ],
  "@stylistic/comma-dangle": [
    "error",
    {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
    }
  ],
  "@stylistic/comma-spacing": [
    "error",
    {
      "before": false,
      "after": true
    }
  ],
  "@stylistic/comma-style": [
    "error",
    "last",
    {
      "exceptions": {
        "ArrayExpression": false,
        "ArrayPattern": false,
        "ArrowFunctionExpression": false,
        "CallExpression": false,
        "FunctionDeclaration": false,
        "FunctionExpression": false,
        "ImportDeclaration": false,
        "ObjectExpression": false,
        "ObjectPattern": false,
        "VariableDeclaration": false,
        "NewExpression": false
      }
    }
  ],
  "@stylistic/computed-property-spacing": [
    "error",
    "never"
  ],
  "consistent-this": [
    "off"
  ],
  "@stylistic/eol-last": [
    "error",
    "always"
  ],
  "@stylistic/function-call-argument-newline": [
    "error",
    "consistent"
  ],
  "func-call-spacing": [
    "error",
    "never"
  ],
  "func-name-matching": [
    "off",
    "always",
    {
      "includeCommonJSModuleExports": false,
      "considerPropertyDescriptor": true
    }
  ],
  "func-names": [
    "warn"
  ],
  "func-style": [
    "off",
    "expression"
  ],
  "id-denylist": [
    "off"
  ],
  "id-length": [
    "off"
  ],
  "id-match": [
    "off"
  ],
  "@stylistic/indent": [
    "error",
    2,
    {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1
      },
      "CallExpression": {
        "arguments": 1
      },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoredNodes": [
        "JSXElement",
        "JSXElement > *",
        "JSXAttribute",
        "JSXIdentifier",
        "JSXNamespacedName",
        "JSXMemberExpression",
        "JSXSpreadAttribute",
        "JSXExpressionContainer",
        "JSXOpeningElement",
        "JSXClosingElement",
        "JSXFragment",
        "JSXOpeningFragment",
        "JSXClosingFragment",
        "JSXText",
        "JSXEmptyExpression",
        "JSXSpreadChild"
      ],
      "ignoreComments": false,
      "offsetTernaryExpressions": false
    }
  ],
  "@stylistic/key-spacing": [
    "error",
    {
      "beforeColon": false,
      "afterColon": true
    }
  ],
  "@stylistic/keyword-spacing": [
    "error",
    {
      "before": true,
      "after": true,
      "overrides": {
        "return": {
          "after": true
        },
        "throw": {
          "after": true
        },
        "case": {
          "after": true
        }
      }
    }
  ],
  "@stylistic/line-comment-position": [
    "off",
    {
      "position": "above",
      "ignorePattern": "",
      "applyDefaultPatterns": true
    }
  ],
  "@stylistic/linebreak-style": [
    "error",
    "unix"
  ],
  "@stylistic/lines-between-class-members": [
    "error",
    "always",
    {
      "exceptAfterSingleLine": false
    }
  ],
  "@stylistic/lines-around-comment": [
    "off"
  ],
  "lines-around-directive": [
    "error",
    {
      "before": "always",
      "after": "always"
    }
  ],
  "max-depth": [
    "off",
    4
  ],
  "max-lines": [
    "off",
    {
      "max": 300,
      "skipBlankLines": true,
      "skipComments": true
    }
  ],
  "max-lines-per-function": [
    "off",
    {
      "max": 50,
      "skipBlankLines": true,
      "skipComments": true,
      "IIFEs": true
    }
  ],
  "max-nested-callbacks": [
    "off"
  ],
  "max-params": [
    "off",
    3
  ],
  "max-statements": [
    "off",
    10
  ],
  "@stylistic/max-statements-per-line": [
    "off",
    {
      "max": 1
    }
  ],
  "@stylistic/multiline-comment-style": [
    "off",
    "starred-block"
  ],
  "@stylistic/multiline-ternary": [
    "off",
    "never"
  ],
  "new-cap": [
    "error",
    {
      "newIsCap": true,
      "newIsCapExceptions": [],
      "capIsNew": false,
      "capIsNewExceptions": [
        "Immutable.Map",
        "Immutable.Set",
        "Immutable.List"
      ],
      "properties": true
    }
  ],
  "@stylistic/new-parens": [
    "error"
  ],
  "newline-after-var": [
    "off"
  ],
  "newline-before-return": [
    "off"
  ],
  "@stylistic/newline-per-chained-call": [
    "error",
    {
      "ignoreChainWithDepth": 4
    }
  ],
  "no-bitwise": [
    "error"
  ],
  "no-continue": [
    "error"
  ],
  "no-inline-comments": [
    "off"
  ],
  "no-lonely-if": [
    "error"
  ],
  "@stylistic/no-mixed-spaces-and-tabs": [
    "error"
  ],
  "no-multi-assign": [
    "error"
  ],
  "@stylistic/no-multiple-empty-lines": [
    "error",
    {
      "max": 1,
      "maxBOF": 0,
      "maxEOF": 0
    }
  ],
  "no-negated-condition": [
    "off"
  ],
  "no-nested-ternary": [
    "error"
  ],
  "no-new-object": [
    "error"
  ],
  "no-plusplus": [
    "error"
  ],
  "no-restricted-syntax": [
    "error",
    {
      "selector": "ForInStatement",
      "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
    },
    {
      "selector": "ForOfStatement",
      "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
    },
    {
      "selector": "LabeledStatement",
      "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
    },
    {
      "selector": "WithStatement",
      "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
    }
  ],
  "no-spaced-func": [
    "error"
  ],
  "@stylistic/no-tabs": [
    "error"
  ],
  "no-ternary": [
    "off"
  ],
  "no-unneeded-ternary": [
    "error",
    {
      "defaultAssignment": false
    }
  ],
  "@stylistic/no-whitespace-before-property": [
    "error"
  ],
  "@stylistic/nonblock-statement-body-position": [
    "error",
    "beside",
    {
      "overrides": {}
    }
  ],
  "@stylistic/object-curly-spacing": [
    "error",
    "always"
  ],
  "@stylistic/object-curly-newline": [
    "error",
    {
      "ObjectExpression": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      },
      "ObjectPattern": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      },
      "ImportDeclaration": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      },
      "ExportDeclaration": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      }
    }
  ],
  "@stylistic/object-property-newline": [
    "error",
    {
      "allowAllPropertiesOnSameLine": true,
      "allowMultiplePropertiesPerLine": false
    }
  ],
  "one-var": [
    "error",
    "never"
  ],
  "@stylistic/one-var-declaration-per-line": [
    "error",
    "always"
  ],
  "operator-assignment": [
    "error",
    "always"
  ],
  "@stylistic/operator-linebreak": [
    "error",
    "before",
    {
      "overrides": {
        "=": "none"
      }
    }
  ],
  "@stylistic/padded-blocks": [
    "error",
    {
      "blocks": "never",
      "classes": "never",
      "switches": "never"
    },
    {
      "allowSingleLineBlocks": true
    }
  ],
  "@stylistic/padding-line-between-statements": [
    "off"
  ],
  "prefer-exponentiation-operator": [
    "error"
  ],
  "prefer-object-spread": [
    "error"
  ],
  "@stylistic/quote-props": [
    "error",
    "as-needed",
    {
      "keywords": false,
      "unnecessary": true,
      "numbers": false
    }
  ],
  "@stylistic/quotes": [
    "error",
    "single",
    {
      "avoidEscape": true
    }
  ],
  "@stylistic/semi": [
    "error",
    "always"
  ],
  "@stylistic/semi-spacing": [
    "error",
    {
      "before": false,
      "after": true
    }
  ],
  "@stylistic/semi-style": [
    "error",
    "last"
  ],
  "sort-keys": [
    "off",
    "asc",
    {
      "caseSensitive": false,
      "natural": true
    }
  ],
  "sort-vars": [
    "off"
  ],
  "@stylistic/space-before-blocks": [
    "error"
  ],
  "@stylistic/space-in-parens": [
    "error",
    "never"
  ],
  "@stylistic/space-infix-ops": [
    "error"
  ],
  "@stylistic/space-unary-ops": [
    "error",
    {
      "words": true,
      "nonwords": false,
      "overrides": {}
    }
  ],
  "@stylistic/spaced-comment": [
    "error",
    "always",
    {
      "line": {
        "exceptions": [
          "-",
          "+"
        ],
        "markers": [
          "=",
          "!",
          "/"
        ]
      },
      "block": {
        "exceptions": [
          "-",
          "+"
        ],
        "markers": [
          "=",
          "!",
          ":",
          "::"
        ],
        "balanced": true
      }
    }
  ],
  "@stylistic/switch-colon-spacing": [
    "error",
    {
      "after": true,
      "before": false
    }
  ],
  "@stylistic/template-tag-spacing": [
    "error",
    "never"
  ],
  "unicode-bom": [
    "error",
    "never"
  ],
  "@stylistic/wrap-regex": [
    "off"
  ],
  "callback-return": [
    "off"
  ],
  "global-require": [
    "error"
  ],
  "handle-callback-err": [
    "off"
  ],
  "no-buffer-constructor": [
    "error"
  ],
  "no-mixed-requires": [
    "off",
    false
  ],
  "no-new-require": [
    "error"
  ],
  "no-path-concat": [
    "error"
  ],
  "no-process-env": [
    "off"
  ],
  "no-process-exit": [
    "off"
  ],
  "no-restricted-modules": [
    "off"
  ],
  "no-sync": [
    "off"
  ],
  "for-direction": [
    "error"
  ],
  "no-async-promise-executor": [
    "error"
  ],
  "no-await-in-loop": [
    "error"
  ],
  "no-compare-neg-zero": [
    "error"
  ],
  "no-cond-assign": [
    "error",
    "always"
  ],
  "no-constant-condition": [
    "warn"
  ],
  "no-control-regex": [
    "error"
  ],
  "no-debugger": [
    "error"
  ],
  "no-dupe-else-if": [
    "error"
  ],
  "no-duplicate-case": [
    "error"
  ],
  "no-empty": [
    "error"
  ],
  "no-empty-character-class": [
    "error"
  ],
  "no-ex-assign": [
    "error"
  ],
  "no-extra-boolean-cast": [
    "error"
  ],
  "@stylistic/no-extra-parens": [
    "off",
    "all",
    {
      "conditionalAssign": true,
      "nestedBinaryExpressions": false,
      "returnAssign": false,
      "ignoreJSX": "all",
      "enforceForArrowConditionals": false
    }
  ],
  "@stylistic/no-extra-semi": [
    "error"
  ],
  "no-inner-declarations": [
    "error"
  ],
  "no-invalid-regexp": [
    "error"
  ],
  "no-irregular-whitespace": [
    "error"
  ],
  "no-loss-of-precision": [
    "error"
  ],
  "no-misleading-character-class": [
    "error"
  ],
  "no-promise-executor-return": [
    "error"
  ],
  "no-prototype-builtins": [
    "error"
  ],
  "no-regex-spaces": [
    "error"
  ],
  "no-sparse-arrays": [
    "error"
  ],
  "no-template-curly-in-string": [
    "error"
  ],
  "no-unexpected-multiline": [
    "error"
  ],
  "no-unreachable-loop": [
    "error",
    {
      "ignore": []
    }
  ],
  "no-unsafe-finally": [
    "error"
  ],
  "no-unsafe-optional-chaining": [
    "error",
    {
      "disallowArithmeticOperators": true
    }
  ],
  "no-unused-private-class-members": [
    "off"
  ],
  "no-useless-backreference": [
    "error"
  ],
  "no-negated-in-lhs": [
    "off"
  ],
  "require-atomic-updates": [
    "off"
  ],
  "use-isnan": [
    "error"
  ],
  "valid-typeof": [
    "error",
    {
      "requireStringLiterals": true
    }
  ],
  "accessor-pairs": [
    "off"
  ],
  "array-callback-return": [
    "error",
    {
      "allowImplicit": true,
      "checkForEach": false,
      "allowVoid": false
    }
  ],
  "block-scoped-var": [
    "error"
  ],
  "complexity": [
    "off",
    20
  ],
  "consistent-return": [
    "error"
  ],
  "curly": [
    "error",
    "multi-line"
  ],
  "default-case": [
    "error",
    {
      "commentPattern": "^no default$"
    }
  ],
  "default-case-last": [
    "error"
  ],
  "default-param-last": [
    "error"
  ],
  "@stylistic/dot-location": [
    "error",
    "property"
  ],
  "eqeqeq": [
    "error",
    "always",
    {
      "null": "ignore"
    }
  ],
  "grouped-accessor-pairs": [
    "error"
  ],
  "guard-for-in": [
    "error"
  ],
  "max-classes-per-file": [
    "error",
    1
  ],
  "no-alert": [
    "warn"
  ],
  "no-caller": [
    "error"
  ],
  "no-case-declarations": [
    "error"
  ],
  "no-constructor-return": [
    "error"
  ],
  "no-div-regex": [
    "off"
  ],
  "no-else-return": [
    "error",
    {
      "allowElseIf": false
    }
  ],
  "no-empty-function": [
    "error",
    {
      "allow": [
        "arrowFunctions",
        "functions",
        "methods"
      ]
    }
  ],
  "no-empty-pattern": [
    "error"
  ],
  "no-eq-null": [
    "off"
  ],
  "no-eval": [
    "error"
  ],
  "no-extend-native": [
    "error"
  ],
  "no-extra-bind": [
    "error"
  ],
  "no-extra-label": [
    "error"
  ],
  "no-fallthrough": [
    "error"
  ],
  "@stylistic/no-floating-decimal": [
    "error"
  ],
  "no-global-assign": [
    "error",
    {
      "exceptions": []
    }
  ],
  "no-native-reassign": [
    "off"
  ],
  "no-implicit-coercion": [
    "off",
    {
      "boolean": false,
      "number": true,
      "string": true,
      "allow": []
    }
  ],
  "no-implicit-globals": [
    "off"
  ],
  "no-implied-eval": [
    "error"
  ],
  "no-invalid-this": [
    "off"
  ],
  "no-iterator": [
    "error"
  ],
  "no-labels": [
    "error",
    {
      "allowLoop": false,
      "allowSwitch": false
    }
  ],
  "no-lone-blocks": [
    "error"
  ],
  "no-loop-func": [
    "error"
  ],
  "no-magic-numbers": [
    "off",
    {
      "ignore": [],
      "ignoreArrayIndexes": true,
      "enforceConst": true,
      "detectObjects": false
    }
  ],
  "@stylistic/no-multi-spaces": [
    "error",
    {
      "ignoreEOLComments": false
    }
  ],
  "no-multi-str": [
    "error"
  ],
  "no-new": [
    "error"
  ],
  "no-new-func": [
    "error"
  ],
  "no-new-wrappers": [
    "error"
  ],
  "no-nonoctal-decimal-escape": [
    "error"
  ],
  "no-octal": [
    "error"
  ],
  "no-octal-escape": [
    "error"
  ],
  "no-param-reassign": [
    "error",
    {
      "props": true,
      "ignorePropertyModificationsFor": [
        "acc",
        "accumulator",
        "e",
        "ctx",
        "context",
        "req",
        "request",
        "res",
        "response",
        "$scope",
        "staticContext"
      ]
    }
  ],
  "no-proto": [
    "error"
  ],
  "no-restricted-properties": [
    "error",
    {
      "object": "arguments",
      "property": "callee",
      "message": "arguments.callee is deprecated"
    },
    {
      "object": "global",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    },
    {
      "object": "self",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    },
    {
      "object": "window",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    },
    {
      "object": "global",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    },
    {
      "object": "self",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    },
    {
      "object": "window",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    },
    {
      "property": "__defineGetter__",
      "message": "Please use Object.defineProperty instead."
    },
    {
      "property": "__defineSetter__",
      "message": "Please use Object.defineProperty instead."
    },
    {
      "object": "Math",
      "property": "pow",
      "message": "Use the exponentiation operator (**) instead."
    }
  ],
  "no-return-assign": [
    "error",
    "always"
  ],
  "no-return-await": [
    "error"
  ],
  "no-script-url": [
    "error"
  ],
  "no-self-assign": [
    "error",
    {
      "props": true
    }
  ],
  "no-self-compare": [
    "error"
  ],
  "no-sequences": [
    "error"
  ],
  "no-throw-literal": [
    "error"
  ],
  "no-unmodified-loop-condition": [
    "off"
  ],
  "no-unused-labels": [
    "error"
  ],
  "no-useless-call": [
    "off"
  ],
  "no-useless-catch": [
    "error"
  ],
  "no-useless-concat": [
    "error"
  ],
  "no-useless-escape": [
    "error"
  ],
  "no-useless-return": [
    "error"
  ],
  "no-void": [
    "error"
  ],
  "no-warning-comments": [
    "off",
    {
      "terms": [
        "todo",
        "fixme",
        "xxx"
      ],
      "location": "start"
    }
  ],
  "no-with": [
    "error"
  ],
  "prefer-promise-reject-errors": [
    "error",
    {
      "allowEmptyReject": true
    }
  ],
  "prefer-named-capture-group": [
    "off"
  ],
  "prefer-regex-literals": [
    "error",
    {
      "disallowRedundantWrapping": true
    }
  ],
  "radix": [
    "error"
  ],
  "require-await": [
    "off"
  ],
  "require-unicode-regexp": [
    "off"
  ],
  "vars-on-top": [
    "error"
  ],
  "@stylistic/wrap-iife": [
    "error",
    "outside",
    {
      "functionPrototypeMethods": false
    }
  ],
  "yoda": [
    "error"
  ]
};

export const legacyJsxA11yXRules = {
  "jsx-a11y-x/alt-text": [
    "error",
    {
      "elements": [
        "img",
        "object",
        "area",
        "input[type=\"image\"]"
      ],
      "img": [],
      "object": [],
      "area": [],
      "input[type=\"image\"]": []
    }
  ],
  "jsx-a11y-x/anchor-has-content": [
    "error",
    {
      "components": []
    }
  ],
  "jsx-a11y-x/anchor-is-valid": [
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
  "jsx-a11y-x/aria-activedescendant-has-tabindex": [
    "error"
  ],
  "jsx-a11y-x/aria-props": [
    "error"
  ],
  "jsx-a11y-x/aria-proptypes": [
    "error"
  ],
  "jsx-a11y-x/aria-role": [
    "error",
    {
      "ignoreNonDOM": false
    }
  ],
  "jsx-a11y-x/aria-unsupported-elements": [
    "error"
  ],
  "jsx-a11y-x/control-has-associated-label": [
    "error",
    {
      "labelAttributes": [
        "label"
      ],
      "controlComponents": [],
      "ignoreElements": [
        "audio",
        "canvas",
        "embed",
        "input",
        "textarea",
        "tr",
        "video"
      ],
      "ignoreRoles": [
        "grid",
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "row",
        "tablist",
        "toolbar",
        "tree",
        "treegrid"
      ],
      "depth": 5
    }
  ],
  "jsx-a11y-x/heading-has-content": [
    "error",
    {
      "components": [
        ""
      ]
    }
  ],
  "jsx-a11y-x/html-has-lang": [
    "error"
  ],
  "jsx-a11y-x/iframe-has-title": [
    "error"
  ],
  "jsx-a11y-x/img-redundant-alt": [
    "error"
  ],
  "jsx-a11y-x/interactive-supports-focus": [
    "error"
  ],
  "jsx-a11y-x/lang": [
    "error"
  ],
  "jsx-a11y-x/media-has-caption": [
    "error",
    {
      "audio": [],
      "video": [],
      "track": []
    }
  ],
  "jsx-a11y-x/mouse-events-have-key-events": [
    "error"
  ],
  "jsx-a11y-x/no-access-key": [
    "error"
  ],
  "jsx-a11y-x/no-autofocus": [
    "error",
    {
      "ignoreNonDOM": true
    }
  ],
  "jsx-a11y-x/no-distracting-elements": [
    "error",
    {
      "elements": [
        "marquee",
        "blink"
      ]
    }
  ],
  "jsx-a11y-x/no-interactive-element-to-noninteractive-role": [
    "error",
    {
      "tr": [
        "none",
        "presentation"
      ]
    }
  ],
  "jsx-a11y-x/no-noninteractive-element-interactions": [
    "error",
    {
      "handlers": [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ]
    }
  ],
  "jsx-a11y-x/no-noninteractive-element-to-interactive-role": [
    "error",
    {
      "ul": [
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "tablist",
        "tree",
        "treegrid"
      ],
      "ol": [
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "tablist",
        "tree",
        "treegrid"
      ],
      "li": [
        "menuitem",
        "option",
        "row",
        "tab",
        "treeitem"
      ],
      "table": [
        "grid"
      ],
      "td": [
        "gridcell"
      ]
    }
  ],
  "jsx-a11y-x/no-noninteractive-tabindex": [
    "error",
    {
      "tags": [],
      "roles": [
        "tabpanel"
      ]
    }
  ],
  "jsx-a11y-x/no-redundant-roles": [
    "error"
  ],
  "jsx-a11y-x/no-static-element-interactions": [
    "error",
    {
      "handlers": [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ]
    }
  ],
  "jsx-a11y-x/role-has-required-aria-props": [
    "error"
  ],
  "jsx-a11y-x/role-supports-aria-props": [
    "error"
  ],
  "jsx-a11y-x/scope": [
    "error"
  ],
  "jsx-a11y-x/tabindex-no-positive": [
    "error"
  ]
};

export const legacyReactReplacementRules = {
  "@eslint-react/dom-no-dangerously-set-innerhtml": "warn",
  "@eslint-react/dom-no-dangerously-set-innerhtml-with-children": "error",
  "@eslint-react/dom-no-find-dom-node": "error",
  "@eslint-react/dom-no-missing-button-type": "error",
  "@eslint-react/dom-no-render-return-value": "error",
  "@eslint-react/dom-no-script-url": "error",
  "@eslint-react/dom-no-string-style-prop": "error",
  "@eslint-react/dom-no-unknown-property": "error",
  "@eslint-react/dom-no-unsafe-target-blank": "error",
  "@eslint-react/dom-no-void-elements-with-children": "error",
  "@eslint-react/jsx-no-children-prop": "error",
  "@eslint-react/jsx-no-comment-textnodes": "error",
  "@eslint-react/jsx-no-namespace": "error",
  "@eslint-react/jsx-no-useless-fragment": "error",
  "@eslint-react/no-access-state-in-setstate": "error",
  "@eslint-react/no-array-index-key": "error",
  "@eslint-react/no-component-will-mount": "error",
  "@eslint-react/no-component-will-receive-props": "error",
  "@eslint-react/no-component-will-update": "error",
  "@eslint-react/no-nested-component-definitions": "error",
  "@eslint-react/no-set-state-in-component-did-update": "error",
  "@eslint-react/no-set-state-in-component-will-update": "error",
  "@eslint-react/no-unsafe-component-will-mount": "error",
  "@eslint-react/no-unsafe-component-will-receive-props": "error",
  "@eslint-react/no-unsafe-component-will-update": "error",
  "@eslint-react/no-unstable-context-value": "error",
  "@eslint-react/no-unused-class-component-members": "error",
  "@eslint-react/no-unused-state": "error",
  "@stylistic/jsx-closing-bracket-location": [
    "error",
    "line-aligned"
  ],
  "@stylistic/jsx-closing-tag-location": [
    "error"
  ],
  "@stylistic/jsx-curly-brace-presence": [
    "error",
    {
      "props": "never",
      "children": "never"
    }
  ],
  "@stylistic/jsx-curly-newline": [
    "error",
    {
      "multiline": "consistent",
      "singleline": "consistent"
    }
  ],
  "@stylistic/jsx-curly-spacing": [
    "error",
    "never",
    {
      "allowMultiline": true
    }
  ],
  "@stylistic/jsx-equals-spacing": [
    "error",
    "never"
  ],
  "@stylistic/jsx-first-prop-new-line": [
    "error",
    "multiline-multiprop"
  ],
  "@stylistic/jsx-indent-props": [
    "error",
    2
  ],
  "@stylistic/jsx-max-props-per-line": [
    "error",
    {
      "maximum": 1,
      "when": "multiline"
    }
  ],
  "@stylistic/jsx-one-expression-per-line": [
    "error",
    {
      "allow": "single-child"
    }
  ],
  "@stylistic/jsx-pascal-case": [
    "error",
    {
      "allowAllCaps": true,
      "ignore": []
    }
  ],
  "@stylistic/jsx-self-closing-comp": [
    "error"
  ],
  "@stylistic/jsx-tag-spacing": [
    "error",
    {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }
  ],
  "@stylistic/jsx-wrap-multilines": [
    "error",
    {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line"
    }
  ]
};

export const legacyRuleReplacementNotes = {
  "jsx-a11y/anchor-is-valid": {
    "replacement": "jsx-a11y-x/anchor-is-valid",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/click-events-have-key-events": {
    "replacement": "jsx-a11y-x/click-events-have-key-events",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace; its recommended preset enables this rule."
  },
  "@typescript-eslint/explicit-function-return-type": {
    "replacement": "@typescript-eslint/explicit-function-return-type",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-namespace": {
    "replacement": "@typescript-eslint/no-namespace",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "jsx-a11y/label-has-associated-control": {
    "replacement": "jsx-a11y-x/label-has-associated-control",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace; its recommended preset enables this rule."
  },
  "@typescript-eslint/no-use-before-define": {
    "replacement": "@typescript-eslint/no-use-before-define",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-unused-vars": {
    "replacement": "@typescript-eslint/no-unused-vars",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/space-before-function-paren": {
    "replacement": "@stylistic/space-before-function-paren",
    "status": "available-not-enabled",
    "note": "The TypeScript stylistic rule was removed; @stylistic owns the maintained replacement, and the legacy rule was disabled."
  },
  "@typescript-eslint/ban-ts-comment": {
    "replacement": "@typescript-eslint/ban-ts-comment",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-array-constructor": {
    "replacement": "@typescript-eslint/no-array-constructor",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-duplicate-enum-values": {
    "replacement": "@typescript-eslint/no-duplicate-enum-values",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-empty-object-type": {
    "replacement": "@typescript-eslint/no-empty-object-type",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-explicit-any": {
    "replacement": "@typescript-eslint/no-explicit-any",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-extra-non-null-assertion": {
    "replacement": "@typescript-eslint/no-extra-non-null-assertion",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-misused-new": {
    "replacement": "@typescript-eslint/no-misused-new",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-non-null-asserted-optional-chain": {
    "replacement": "@typescript-eslint/no-non-null-asserted-optional-chain",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-require-imports": {
    "replacement": "@typescript-eslint/no-require-imports",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-this-alias": {
    "replacement": "@typescript-eslint/no-this-alias",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-unnecessary-type-constraint": {
    "replacement": "@typescript-eslint/no-unnecessary-type-constraint",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-unsafe-declaration-merging": {
    "replacement": "@typescript-eslint/no-unsafe-declaration-merging",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-unsafe-function-type": {
    "replacement": "@typescript-eslint/no-unsafe-function-type",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-unused-expressions": {
    "replacement": "@typescript-eslint/no-unused-expressions",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/no-wrapper-object-types": {
    "replacement": "@typescript-eslint/no-wrapper-object-types",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/prefer-as-const": {
    "replacement": "@typescript-eslint/prefer-as-const",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/prefer-namespace-keyword": {
    "replacement": "@typescript-eslint/prefer-namespace-keyword",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "@typescript-eslint/triple-slash-reference": {
    "replacement": "@typescript-eslint/triple-slash-reference",
    "status": "active",
    "note": "The current typescript-eslint flat config exposes this rule under the same rule ID."
  },
  "react-hooks/rules-of-hooks": {
    "replacement": "react-hooks/rules-of-hooks",
    "status": "active",
    "note": "eslint-plugin-react-hooks supports the rule under the same rule ID and is applied through its flat recommended config."
  },
  "react-hooks/exhaustive-deps": {
    "replacement": "react-hooks/exhaustive-deps",
    "status": "active",
    "note": "eslint-plugin-react-hooks supports the rule under the same rule ID and is applied through its flat recommended config."
  },
  "jsx-a11y/alt-text": {
    "replacement": "jsx-a11y-x/alt-text",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/anchor-has-content": {
    "replacement": "jsx-a11y-x/anchor-has-content",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/aria-activedescendant-has-tabindex": {
    "replacement": "jsx-a11y-x/aria-activedescendant-has-tabindex",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/aria-props": {
    "replacement": "jsx-a11y-x/aria-props",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/aria-proptypes": {
    "replacement": "jsx-a11y-x/aria-proptypes",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/aria-role": {
    "replacement": "jsx-a11y-x/aria-role",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/aria-unsupported-elements": {
    "replacement": "jsx-a11y-x/aria-unsupported-elements",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/autocomplete-valid": {
    "replacement": "jsx-a11y-x/autocomplete-valid",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace; its recommended preset enables this rule."
  },
  "jsx-a11y/control-has-associated-label": {
    "replacement": "jsx-a11y-x/control-has-associated-label",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/heading-has-content": {
    "replacement": "jsx-a11y-x/heading-has-content",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/html-has-lang": {
    "replacement": "jsx-a11y-x/html-has-lang",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/iframe-has-title": {
    "replacement": "jsx-a11y-x/iframe-has-title",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/img-redundant-alt": {
    "replacement": "jsx-a11y-x/img-redundant-alt",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/interactive-supports-focus": {
    "replacement": "jsx-a11y-x/interactive-supports-focus",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/lang": {
    "replacement": "jsx-a11y-x/lang",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/media-has-caption": {
    "replacement": "jsx-a11y-x/media-has-caption",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/mouse-events-have-key-events": {
    "replacement": "jsx-a11y-x/mouse-events-have-key-events",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-access-key": {
    "replacement": "jsx-a11y-x/no-access-key",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-autofocus": {
    "replacement": "jsx-a11y-x/no-autofocus",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-distracting-elements": {
    "replacement": "jsx-a11y-x/no-distracting-elements",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-interactive-element-to-noninteractive-role": {
    "replacement": "jsx-a11y-x/no-interactive-element-to-noninteractive-role",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-noninteractive-element-interactions": {
    "replacement": "jsx-a11y-x/no-noninteractive-element-interactions",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-noninteractive-element-to-interactive-role": {
    "replacement": "jsx-a11y-x/no-noninteractive-element-to-interactive-role",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-noninteractive-tabindex": {
    "replacement": "jsx-a11y-x/no-noninteractive-tabindex",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-redundant-roles": {
    "replacement": "jsx-a11y-x/no-redundant-roles",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/no-static-element-interactions": {
    "replacement": "jsx-a11y-x/no-static-element-interactions",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/role-has-required-aria-props": {
    "replacement": "jsx-a11y-x/role-has-required-aria-props",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/role-supports-aria-props": {
    "replacement": "jsx-a11y-x/role-supports-aria-props",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/scope": {
    "replacement": "jsx-a11y-x/scope",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/tabindex-no-positive": {
    "replacement": "jsx-a11y-x/tabindex-no-positive",
    "status": "active",
    "note": "eslint-plugin-jsx-a11y-x provides an ESLint 10-compatible rule under the jsx-a11y-x namespace."
  },
  "jsx-a11y/label-has-for": {
    "replacement": "jsx-a11y-x/label-has-associated-control",
    "status": "obsolete-alias-not-enabled",
    "note": "The legacy rule was disabled and was superseded by label-has-associated-control."
  },
  "react/display-name": {
    "replacement": "@eslint-react/no-missing-component-display-name",
    "status": "available-not-enabled",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin; the legacy rule was disabled."
  },
  "react/jsx-closing-bracket-location": {
    "replacement": "@stylistic/jsx-closing-bracket-location",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-closing-tag-location": {
    "replacement": "@stylistic/jsx-closing-tag-location",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-curly-spacing": {
    "replacement": "@stylistic/jsx-curly-spacing",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-indent-props": {
    "replacement": "@stylistic/jsx-indent-props",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-key": {
    "replacement": "@eslint-react/no-missing-key",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace; the recommended preset enables it."
  },
  "react/jsx-max-props-per-line": {
    "replacement": "@stylistic/jsx-max-props-per-line",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-pascal-case": {
    "replacement": "@stylistic/jsx-pascal-case",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-sort-props": {
    "replacement": "@stylistic/jsx-sort-props",
    "status": "available-not-enabled",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/no-danger": {
    "replacement": "@eslint-react/dom-no-dangerously-set-innerhtml",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-deprecated": {
    "replacement": [
      "@eslint-react/no-component-will-mount",
      "@eslint-react/no-component-will-receive-props",
      "@eslint-react/no-component-will-update",
      "@eslint-react/no-unsafe-component-will-mount",
      "@eslint-react/no-unsafe-component-will-receive-props",
      "@eslint-react/no-unsafe-component-will-update"
    ],
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-did-mount-set-state": {
    "replacement": "@eslint-react/no-set-state-in-component-did-mount",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace; the recommended preset enables it."
  },
  "react/no-did-update-set-state": {
    "replacement": "@eslint-react/no-set-state-in-component-did-update",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-will-update-set-state": {
    "replacement": "@eslint-react/no-set-state-in-component-will-update",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-direct-mutation-state": {
    "replacement": "@eslint-react/no-direct-mutation-state",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace; the recommended preset enables it."
  },
  "react/no-unknown-property": {
    "replacement": "@eslint-react/dom-no-unknown-property",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/self-closing-comp": {
    "replacement": "@stylistic/jsx-self-closing-comp",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-wrap-multilines": {
    "replacement": "@stylistic/jsx-wrap-multilines",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-first-prop-new-line": {
    "replacement": "@stylistic/jsx-first-prop-new-line",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-equals-spacing": {
    "replacement": "@stylistic/jsx-equals-spacing",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-indent": {
    "replacement": "@stylistic/indent",
    "status": "active",
    "note": "The deprecated @stylistic/jsx-indent replacement was not enabled; @stylistic recommends the active unified indent rule."
  },
  "react/jsx-no-target-blank": {
    "replacement": "@eslint-react/dom-no-unsafe-target-blank",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/jsx-no-comment-textnodes": {
    "replacement": "@eslint-react/jsx-no-comment-textnodes",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-render-return-value": {
    "replacement": "@eslint-react/dom-no-render-return-value",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-find-dom-node": {
    "replacement": "@eslint-react/dom-no-find-dom-node",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-danger-with-children": {
    "replacement": "@eslint-react/dom-no-dangerously-set-innerhtml-with-children",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-unused-prop-types": {
    "replacement": "@eslint-react/no-unused-props",
    "status": "available-not-enabled",
    "note": "The maintained @eslint-react replacement requires type-aware parser services, so this shared config does not enable it by default."
  },
  "react/style-prop-object": {
    "replacement": "@eslint-react/dom-no-string-style-prop",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-children-prop": {
    "replacement": "@eslint-react/jsx-no-children-prop",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/jsx-tag-spacing": {
    "replacement": "@stylistic/jsx-tag-spacing",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-space-before-closing": {
    "replacement": "@stylistic/jsx-tag-spacing",
    "status": "active",
    "note": "The removed legacy spacing rule is covered by the active @stylistic/jsx-tag-spacing replacement."
  },
  "react/no-array-index-key": {
    "replacement": "@eslint-react/no-array-index-key",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/void-dom-elements-no-children": {
    "replacement": "@eslint-react/dom-no-void-elements-with-children",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-unused-state": {
    "replacement": "@eslint-react/no-unused-state",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/jsx-curly-brace-presence": {
    "replacement": "@stylistic/jsx-curly-brace-presence",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-one-expression-per-line": {
    "replacement": "@stylistic/jsx-one-expression-per-line",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/no-access-state-in-setstate": {
    "replacement": "@eslint-react/no-access-state-in-setstate",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/button-has-type": {
    "replacement": "@eslint-react/dom-no-missing-button-type",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/jsx-child-element-spacing": {
    "replacement": "@stylistic/jsx-child-element-spacing",
    "status": "available-not-enabled",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-props-no-multi-spaces": {
    "replacement": "@stylistic/no-multi-spaces",
    "status": "active",
    "note": "The deprecated JSX-specific replacement is covered by the active @stylistic/no-multi-spaces rule."
  },
  "react/no-unsafe": {
    "replacement": [
      "@eslint-react/no-unsafe-component-will-mount",
      "@eslint-react/no-unsafe-component-will-receive-props",
      "@eslint-react/no-unsafe-component-will-update"
    ],
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace; the recommended preset enables the split unsafe lifecycle rules."
  },
  "react/jsx-curly-newline": {
    "replacement": "@stylistic/jsx-curly-newline",
    "status": "active",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-no-script-url": {
    "replacement": "@eslint-react/dom-no-script-url",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/jsx-uses-vars": {
    "replacement": "ESLint 10 JSX reference tracking",
    "status": "native-behavior",
    "note": "ESLint 10 handles JSX identifier references without eslint-plugin-react."
  },
  "react/jsx-no-useless-fragment": {
    "replacement": "@eslint-react/jsx-no-useless-fragment",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/jsx-newline": {
    "replacement": "@stylistic/jsx-newline",
    "status": "available-not-enabled",
    "note": "The JSX formatting rule moved to @stylistic/eslint-plugin."
  },
  "react/jsx-no-constructed-context-values": {
    "replacement": "@eslint-react/no-unstable-context-value",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-unstable-nested-components": {
    "replacement": "@eslint-react/no-nested-component-definitions",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-namespace": {
    "replacement": "@eslint-react/jsx-no-namespace",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-invalid-html-attribute": {
    "replacement": "@eslint-react/dom-no-unknown-property",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "react/no-unused-class-component-methods": {
    "replacement": "@eslint-react/no-unused-class-component-members",
    "status": "active",
    "note": "The maintained React rule now lives in @eslint-react/eslint-plugin with a flattened @eslint-react namespace."
  },
  "require-jsdoc": {
    "replacement": "jsdoc/require-jsdoc",
    "status": "optional-not-installed",
    "note": "eslint-plugin-jsdoc is compatible with ESLint 10 and provides the replacement, but the legacy rule was disabled."
  },
  "valid-jsdoc": {
    "replacement": [
      "jsdoc/valid-types",
      "jsdoc/check-*"
    ],
    "status": "optional-not-installed",
    "note": "eslint-plugin-jsdoc provides the maintained JSDoc rule family; the removed core rule has no exact single-rule equivalent and was disabled."
  }
};

export const droppedLegacyRuleNotes = {
  "react/jsx-filename-extension": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/forbid-prop-types": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-props-no-spreading": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/prop-types": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/require-default-props": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/function-component-definition": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/react-in-jsx-scope": "Obsolete with the modern JSX runtime; no replacement is needed.",
  "jsx-a11y/accessible-emoji": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "jsx-a11y/no-onchange": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/forbid-dom-props": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-boolean-value": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-handler-names": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-no-bind": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-no-duplicate-props": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-no-literals": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-no-undef": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/sort-prop-types": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-sort-prop-types": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-sort-default-props": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-uses-react": "Obsolete with the modern JSX runtime; no replacement is needed.",
  "react/no-is-mounted": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-multi-comp": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-set-state": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-string-refs": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/prefer-es6-class": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/prefer-stateless-function": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/require-render-return": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/sort-comp": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/require-optimization": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/forbid-component-props": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/forbid-elements": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-unescaped-entities": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/forbid-foreign-prop-types": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/default-props-match-prop-types": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-redundant-should-component-update": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/boolean-prop-naming": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-typos": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/destructuring-assignment": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-this-in-sfc": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-max-depth": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/jsx-fragments": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/state-in-constructor": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/static-property-placement": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/prefer-read-only-props": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-adjacent-inline-elements": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/prefer-exact-props": "No ESLint 10-compatible replacement is selected for this legacy rule.",
  "react/no-arrow-function-lifecycle": "No ESLint 10-compatible replacement is selected for this legacy rule."
};
