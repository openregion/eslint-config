# ESLint shared config

Open Region ESLint shared flat config.

## Requirements

- Node.js 22.13 or newer
- ESLint 10
- TypeScript for TypeScript projects

## Usage

Install the config and peer dependencies:

```shell
npm install --save-dev @openregion/eslint-config eslint typescript
```

Create `eslint.config.js`:

```js
import openregion from "@openregion/eslint-config";

export default [
  ...openregion,
];
```

## Migration notes

This package no longer depends on `eslint-config-airbnb`. Airbnb has not shipped a current flat config preset, so the old behavior is preserved through explicit maintained rules where possible.

Notable changes:

- `eslint-plugin-import` rules are replaced with `eslint-plugin-import-x` rules.
- Deprecated stylistic rules from the old Airbnb-derived config are moved to `@stylistic/eslint-plugin` when a maintained rule exists.
- `eslint-plugin-react` is replaced with `@eslint-react/eslint-plugin` for ESLint 10 compatibility.
- `eslint-plugin-jsx-a11y` is not included because its current peer dependency range does not support ESLint 10.
- `react/jsx-filename-extension`, `react/prop-types`, `react/forbid-prop-types`, and `react/require-default-props` are intentionally dropped. The current best practice for this shared config is TypeScript component typing instead of PropTypes/defaultProps linting.

## Legacy rule IDs not carried verbatim

The old Airbnb-derived effective config is captured in `rules/legacy-airbnb-rules.js`. Some legacy rule IDs cannot be kept 1:1 because the original plugin is not part of the ESLint 10 config, the rule was removed from ESLint, or a maintained replacement layer now owns that concern.

| Legacy group | Handling |
| --- | --- |
| `@typescript-eslint/*` | Replaced by current `typescript-eslint` flat recommended rules plus local TypeScript overrides. |
| `react-hooks/*` | Replaced by current `eslint-plugin-react-hooks` flat recommended rules. |
| `react/*` | Replaced where practical by `@eslint-react/eslint-plugin`; PropTypes/defaultProps and filename-extension rules are intentionally dropped. |
| `jsx-a11y/*` | Intentionally omitted until `eslint-plugin-jsx-a11y` supports ESLint 10 in its peer range. |
| `require-jsdoc`, `valid-jsdoc` | Removed ESLint core rules; intentionally dropped. |

<details>
<summary>Dropped legacy rule IDs</summary>

```text
@typescript-eslint/ban-ts-comment
@typescript-eslint/explicit-function-return-type
@typescript-eslint/no-array-constructor
@typescript-eslint/no-duplicate-enum-values
@typescript-eslint/no-empty-object-type
@typescript-eslint/no-explicit-any
@typescript-eslint/no-extra-non-null-assertion
@typescript-eslint/no-misused-new
@typescript-eslint/no-namespace
@typescript-eslint/no-non-null-asserted-optional-chain
@typescript-eslint/no-require-imports
@typescript-eslint/no-this-alias
@typescript-eslint/no-unnecessary-type-constraint
@typescript-eslint/no-unsafe-declaration-merging
@typescript-eslint/no-unsafe-function-type
@typescript-eslint/no-unused-expressions
@typescript-eslint/no-unused-vars
@typescript-eslint/no-use-before-define
@typescript-eslint/no-wrapper-object-types
@typescript-eslint/prefer-as-const
@typescript-eslint/prefer-namespace-keyword
@typescript-eslint/space-before-function-paren
@typescript-eslint/triple-slash-reference
jsx-a11y/accessible-emoji
jsx-a11y/alt-text
jsx-a11y/anchor-has-content
jsx-a11y/anchor-is-valid
jsx-a11y/aria-activedescendant-has-tabindex
jsx-a11y/aria-props
jsx-a11y/aria-proptypes
jsx-a11y/aria-role
jsx-a11y/aria-unsupported-elements
jsx-a11y/autocomplete-valid
jsx-a11y/click-events-have-key-events
jsx-a11y/control-has-associated-label
jsx-a11y/heading-has-content
jsx-a11y/html-has-lang
jsx-a11y/iframe-has-title
jsx-a11y/img-redundant-alt
jsx-a11y/interactive-supports-focus
jsx-a11y/label-has-associated-control
jsx-a11y/label-has-for
jsx-a11y/lang
jsx-a11y/media-has-caption
jsx-a11y/mouse-events-have-key-events
jsx-a11y/no-access-key
jsx-a11y/no-autofocus
jsx-a11y/no-distracting-elements
jsx-a11y/no-interactive-element-to-noninteractive-role
jsx-a11y/no-noninteractive-element-interactions
jsx-a11y/no-noninteractive-element-to-interactive-role
jsx-a11y/no-noninteractive-tabindex
jsx-a11y/no-onchange
jsx-a11y/no-redundant-roles
jsx-a11y/no-static-element-interactions
jsx-a11y/role-has-required-aria-props
jsx-a11y/role-supports-aria-props
jsx-a11y/scope
jsx-a11y/tabindex-no-positive
react-hooks/exhaustive-deps
react-hooks/rules-of-hooks
react/boolean-prop-naming
react/button-has-type
react/default-props-match-prop-types
react/destructuring-assignment
react/display-name
react/forbid-component-props
react/forbid-dom-props
react/forbid-elements
react/forbid-foreign-prop-types
react/forbid-prop-types
react/function-component-definition
react/jsx-boolean-value
react/jsx-child-element-spacing
react/jsx-closing-bracket-location
react/jsx-closing-tag-location
react/jsx-curly-brace-presence
react/jsx-curly-newline
react/jsx-curly-spacing
react/jsx-equals-spacing
react/jsx-filename-extension
react/jsx-first-prop-new-line
react/jsx-fragments
react/jsx-handler-names
react/jsx-indent
react/jsx-indent-props
react/jsx-key
react/jsx-max-depth
react/jsx-max-props-per-line
react/jsx-newline
react/jsx-no-bind
react/jsx-no-comment-textnodes
react/jsx-no-constructed-context-values
react/jsx-no-duplicate-props
react/jsx-no-literals
react/jsx-no-script-url
react/jsx-no-target-blank
react/jsx-no-undef
react/jsx-no-useless-fragment
react/jsx-one-expression-per-line
react/jsx-pascal-case
react/jsx-props-no-multi-spaces
react/jsx-props-no-spreading
react/jsx-sort-default-props
react/jsx-sort-prop-types
react/jsx-sort-props
react/jsx-space-before-closing
react/jsx-tag-spacing
react/jsx-uses-react
react/jsx-uses-vars
react/jsx-wrap-multilines
react/no-access-state-in-setstate
react/no-adjacent-inline-elements
react/no-array-index-key
react/no-arrow-function-lifecycle
react/no-children-prop
react/no-danger
react/no-danger-with-children
react/no-deprecated
react/no-did-mount-set-state
react/no-did-update-set-state
react/no-direct-mutation-state
react/no-find-dom-node
react/no-invalid-html-attribute
react/no-is-mounted
react/no-multi-comp
react/no-namespace
react/no-redundant-should-component-update
react/no-render-return-value
react/no-set-state
react/no-string-refs
react/no-this-in-sfc
react/no-typos
react/no-unescaped-entities
react/no-unknown-property
react/no-unsafe
react/no-unstable-nested-components
react/no-unused-class-component-methods
react/no-unused-prop-types
react/no-unused-state
react/no-will-update-set-state
react/prefer-es6-class
react/prefer-exact-props
react/prefer-read-only-props
react/prefer-stateless-function
react/prop-types
react/react-in-jsx-scope
react/require-default-props
react/require-optimization
react/require-render-return
react/self-closing-comp
react/sort-comp
react/sort-prop-types
react/state-in-constructor
react/static-property-placement
react/style-prop-object
react/void-dom-elements-no-children
require-jsdoc
valid-jsdoc
```

</details>
