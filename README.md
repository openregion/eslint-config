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
- `eslint-plugin-jsx-a11y` is replaced with `eslint-plugin-jsx-a11y-x` because the upstream package does not currently peer ESLint 10.
- `react/jsx-filename-extension`, `react/prop-types`, `react/forbid-prop-types`, and `react/require-default-props` are intentionally dropped. The current best practice for this shared config is TypeScript component typing instead of PropTypes/defaultProps linting.

## Legacy rule handling

The old Airbnb-derived effective config is captured in `rules/legacy-airbnb-rules.js`. That generated file exports:

- `legacyAirbnbRules`: rules carried forward directly or through maintained rule namespaces such as `@stylistic/*` and `import-x/*`.
- `legacyJsxA11yXRules`: old active `jsx-a11y/*` settings rewritten to `jsx-a11y-x/*`.
- `legacyReactReplacementRules`: old active React rules rewritten to safe `@eslint-react/*` and `@stylistic/*` replacements.
- `legacyRuleReplacementNotes`: legacy rule IDs that moved, were renamed, or have an optional modern replacement.
- `droppedLegacyRuleNotes`: remaining true drops after checking current compatible packages.

Non-verbatim replacements:

- `@typescript-eslint/*` legacy IDs are handled by current `typescript-eslint` flat recommended rules plus local TypeScript overrides.
- `react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps` are handled by current `eslint-plugin-react-hooks` flat recommended rules.
- `jsx-a11y/*` behavior is handled where a maintained rule exists by `eslint-plugin-jsx-a11y-x` under the `jsx-a11y-x/*` namespace.
- `react/*` behavior is handled where practical by `@eslint-react/eslint-plugin` recommended, JSX, and DOM presets. Examples include `react/jsx-key` through `@eslint-react/no-missing-key`, `react/no-direct-mutation-state` through `@eslint-react/no-direct-mutation-state`, `react/no-array-index-key` through `@eslint-react/no-array-index-key`, and DOM safety checks through `@eslint-react/dom-*`.
- JSX formatting rules that moved out of `eslint-plugin-react` are handled through `@stylistic/*` where the replacement is not deprecated.
- Removed JSDoc core rules have a compatible optional path through `eslint-plugin-jsdoc`; this package does not install it because the legacy `require-jsdoc` and `valid-jsdoc` rules were disabled.

Intentional drops:

- Deprecated or disabled `jsx-a11y/*` rules without a `jsx-a11y-x/*` replacement, such as `accessible-emoji` and `no-onchange`, are not carried forward.
- `react/jsx-filename-extension`, `react/prop-types`, `react/forbid-prop-types`, `react/require-default-props`, and related PropTypes/defaultProps checks are dropped in favor of TypeScript component typing.
- Remaining legacy `react/*` style, class-era lifecycle, sorting, and preference rules without a selected `@eslint-react` equivalent are not carried 1:1.
