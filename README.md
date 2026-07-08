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

## Legacy rule handling

The old Airbnb-derived effective config is captured in `rules/legacy-airbnb-rules.js`. That generated file has two exports:

- `legacyAirbnbRules`: rules carried forward directly or through maintained rule namespaces such as `@stylistic/*` and `import-x/*`.
- `droppedLegacyRuleNotes`: legacy rule IDs that could not be copied 1:1. Some entries are true drops; others are handled by replacement layers with current rule IDs.

Non-verbatim replacements:

- `@typescript-eslint/*` legacy IDs are handled by current `typescript-eslint` flat recommended rules plus local TypeScript overrides.
- `react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps` are handled by current `eslint-plugin-react-hooks` flat recommended rules.
- `react/*` behavior is handled where practical by `@eslint-react/eslint-plugin` recommended, JSX, and DOM presets. Examples include `react/jsx-key` through `@eslint-react/no-missing-key`, `react/no-direct-mutation-state` through `@eslint-react/no-direct-mutation-state`, `react/no-array-index-key` through `@eslint-react/no-array-index-key`, and DOM safety checks through `@eslint-react/dom-*`.

Intentional drops:

- `jsx-a11y/*` is omitted until `eslint-plugin-jsx-a11y` supports ESLint 10 in its peer range.
- `react/jsx-filename-extension`, `react/prop-types`, `react/forbid-prop-types`, `react/require-default-props`, and related PropTypes/defaultProps checks are dropped in favor of TypeScript component typing.
- `require-jsdoc` and `valid-jsdoc` are removed ESLint core rules and are not replaced.
- Remaining legacy `react/*` style, class-era lifecycle, sorting, and preference rules without a selected `@eslint-react` equivalent are not carried 1:1.
