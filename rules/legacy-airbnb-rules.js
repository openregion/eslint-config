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

export const droppedLegacyRuleNotes = {
  "jsx-a11y/anchor-is-valid": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-filename-extension": "Original plugin is not part of the ESLint 10 config.",
  "react/forbid-prop-types": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-props-no-spreading": "Original plugin is not part of the ESLint 10 config.",
  "react/prop-types": "Original plugin is not part of the ESLint 10 config.",
  "react/require-default-props": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/click-events-have-key-events": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/explicit-function-return-type": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-namespace": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/label-has-associated-control": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-use-before-define": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-unused-vars": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/space-before-function-paren": "Original plugin is not part of the ESLint 10 config.",
  "react/function-component-definition": "Original plugin is not part of the ESLint 10 config.",
  "react/react-in-jsx-scope": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/ban-ts-comment": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-array-constructor": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-duplicate-enum-values": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-empty-object-type": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-explicit-any": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-extra-non-null-assertion": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-misused-new": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-require-imports": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-this-alias": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-unnecessary-type-constraint": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-unsafe-declaration-merging": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-unsafe-function-type": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-unused-expressions": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/no-wrapper-object-types": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/prefer-as-const": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/prefer-namespace-keyword": "Original plugin is not part of the ESLint 10 config.",
  "@typescript-eslint/triple-slash-reference": "Original plugin is not part of the ESLint 10 config.",
  "react-hooks/rules-of-hooks": "Rule is not available in ESLint 10.",
  "react-hooks/exhaustive-deps": "Rule is not available in ESLint 10.",
  "jsx-a11y/accessible-emoji": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/alt-text": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/anchor-has-content": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/aria-activedescendant-has-tabindex": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/aria-props": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/aria-proptypes": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/aria-role": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/aria-unsupported-elements": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/autocomplete-valid": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/control-has-associated-label": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/heading-has-content": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/html-has-lang": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/iframe-has-title": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/img-redundant-alt": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/interactive-supports-focus": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/lang": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/media-has-caption": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/mouse-events-have-key-events": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-access-key": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-autofocus": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-distracting-elements": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-interactive-element-to-noninteractive-role": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-noninteractive-element-interactions": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-noninteractive-element-to-interactive-role": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-noninteractive-tabindex": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-onchange": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-redundant-roles": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/no-static-element-interactions": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/role-has-required-aria-props": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/role-supports-aria-props": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/scope": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/tabindex-no-positive": "Original plugin is not part of the ESLint 10 config.",
  "jsx-a11y/label-has-for": "Original plugin is not part of the ESLint 10 config.",
  "react/display-name": "Original plugin is not part of the ESLint 10 config.",
  "react/forbid-dom-props": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-boolean-value": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-closing-bracket-location": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-closing-tag-location": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-curly-spacing": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-handler-names": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-indent-props": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-key": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-max-props-per-line": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-bind": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-duplicate-props": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-literals": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-undef": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-pascal-case": "Original plugin is not part of the ESLint 10 config.",
  "react/sort-prop-types": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-sort-prop-types": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-sort-props": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-sort-default-props": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-uses-react": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-uses-vars": "Original plugin is not part of the ESLint 10 config.",
  "react/no-danger": "Original plugin is not part of the ESLint 10 config.",
  "react/no-deprecated": "Original plugin is not part of the ESLint 10 config.",
  "react/no-did-mount-set-state": "Original plugin is not part of the ESLint 10 config.",
  "react/no-did-update-set-state": "Original plugin is not part of the ESLint 10 config.",
  "react/no-will-update-set-state": "Original plugin is not part of the ESLint 10 config.",
  "react/no-direct-mutation-state": "Original plugin is not part of the ESLint 10 config.",
  "react/no-is-mounted": "Original plugin is not part of the ESLint 10 config.",
  "react/no-multi-comp": "Original plugin is not part of the ESLint 10 config.",
  "react/no-set-state": "Original plugin is not part of the ESLint 10 config.",
  "react/no-string-refs": "Original plugin is not part of the ESLint 10 config.",
  "react/no-unknown-property": "Original plugin is not part of the ESLint 10 config.",
  "react/prefer-es6-class": "Original plugin is not part of the ESLint 10 config.",
  "react/prefer-stateless-function": "Original plugin is not part of the ESLint 10 config.",
  "react/require-render-return": "Original plugin is not part of the ESLint 10 config.",
  "react/self-closing-comp": "Original plugin is not part of the ESLint 10 config.",
  "react/sort-comp": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-wrap-multilines": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-first-prop-new-line": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-equals-spacing": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-indent": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-target-blank": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-comment-textnodes": "Original plugin is not part of the ESLint 10 config.",
  "react/no-render-return-value": "Original plugin is not part of the ESLint 10 config.",
  "react/require-optimization": "Original plugin is not part of the ESLint 10 config.",
  "react/no-find-dom-node": "Original plugin is not part of the ESLint 10 config.",
  "react/forbid-component-props": "Original plugin is not part of the ESLint 10 config.",
  "react/forbid-elements": "Original plugin is not part of the ESLint 10 config.",
  "react/no-danger-with-children": "Original plugin is not part of the ESLint 10 config.",
  "react/no-unused-prop-types": "Original plugin is not part of the ESLint 10 config.",
  "react/style-prop-object": "Original plugin is not part of the ESLint 10 config.",
  "react/no-unescaped-entities": "Original plugin is not part of the ESLint 10 config.",
  "react/no-children-prop": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-tag-spacing": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-space-before-closing": "Original plugin is not part of the ESLint 10 config.",
  "react/no-array-index-key": "Original plugin is not part of the ESLint 10 config.",
  "react/forbid-foreign-prop-types": "Original plugin is not part of the ESLint 10 config.",
  "react/void-dom-elements-no-children": "Original plugin is not part of the ESLint 10 config.",
  "react/default-props-match-prop-types": "Original plugin is not part of the ESLint 10 config.",
  "react/no-redundant-should-component-update": "Original plugin is not part of the ESLint 10 config.",
  "react/no-unused-state": "Original plugin is not part of the ESLint 10 config.",
  "react/boolean-prop-naming": "Original plugin is not part of the ESLint 10 config.",
  "react/no-typos": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-curly-brace-presence": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-one-expression-per-line": "Original plugin is not part of the ESLint 10 config.",
  "react/destructuring-assignment": "Original plugin is not part of the ESLint 10 config.",
  "react/no-access-state-in-setstate": "Original plugin is not part of the ESLint 10 config.",
  "react/button-has-type": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-child-element-spacing": "Original plugin is not part of the ESLint 10 config.",
  "react/no-this-in-sfc": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-max-depth": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-props-no-multi-spaces": "Original plugin is not part of the ESLint 10 config.",
  "react/no-unsafe": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-fragments": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-curly-newline": "Original plugin is not part of the ESLint 10 config.",
  "react/state-in-constructor": "Original plugin is not part of the ESLint 10 config.",
  "react/static-property-placement": "Original plugin is not part of the ESLint 10 config.",
  "react/prefer-read-only-props": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-script-url": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-useless-fragment": "Original plugin is not part of the ESLint 10 config.",
  "react/no-adjacent-inline-elements": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-newline": "Original plugin is not part of the ESLint 10 config.",
  "react/jsx-no-constructed-context-values": "Original plugin is not part of the ESLint 10 config.",
  "react/no-unstable-nested-components": "Original plugin is not part of the ESLint 10 config.",
  "react/no-namespace": "Original plugin is not part of the ESLint 10 config.",
  "react/prefer-exact-props": "Original plugin is not part of the ESLint 10 config.",
  "react/no-arrow-function-lifecycle": "Original plugin is not part of the ESLint 10 config.",
  "react/no-invalid-html-attribute": "Original plugin is not part of the ESLint 10 config.",
  "react/no-unused-class-component-methods": "Original plugin is not part of the ESLint 10 config.",
  "require-jsdoc": "Rule is not available in ESLint 10.",
  "valid-jsdoc": "Rule is not available in ESLint 10."
};
