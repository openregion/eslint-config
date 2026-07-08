# XO Config Migration Design

## Goal

Migrate `@openregion/eslint-config` from the legacy Airbnb-based ESLint shareable config to a version `2.0.0` package that exports an XO configuration for React and TypeScript projects.

## Scope

- Drop compatibility with the old `.eslintrc`/`extends: "@openregion"` contract.
- Remove the Airbnb dependency stack.
- Publish a new XO-oriented config API.
- Document usage through `xo.config.js`.

## Package Contract

The package exports an ESM XO config from `index.js`:

```js
import config from '@openregion/eslint-config';

export default config;
```

Consumers use it from `xo.config.js`:

```js
import config from '@openregion/eslint-config';

export default config;
```

## Configuration

The exported config is an array compatible with XO flat configuration.

It enables:

- 2-space indentation with `space: true`.
- React linting with `react: true`.
- TypeScript support through XO's built-in TypeScript handling.

No old Airbnb rule overrides are carried forward. This is a major-version reset, so the XO defaults are the baseline.

## Dependencies

Use `xo` as the primary runtime dependency of the shared config package, because consumers importing this config need the XO config shape and peer dependency behavior to resolve consistently.

Remove:

- `eslint-config-airbnb`
- `eslint-import-resolver-typescript`
- direct legacy TypeScript ESLint peer requirements that were only needed by the old config

## Documentation

Update `README.md` to show:

- install command for the shared config package
- install command including `xo` if needed by the consuming project
- `xo.config.js` example
- `npx xo` usage

## Verification

Verification should prove:

- `index.js` can be imported by Node as ESM.
- XO can load a sample consumer `xo.config.js` that imports the package.
- The package lock reflects the new dependency set and no Airbnb package remains.
