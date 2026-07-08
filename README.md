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
