# ESLint Flat Config Migration Design

## Goal

Migrate `@openregion/eslint-config` to current major versions of the ESLint ecosystem and publish a config that new projects can import from `eslint.config.js`.

Backward compatibility with `.eslintrc` consumers is not required.

## Target Contract

Consumers use the package as a flat config:

```js
import openregion from "@openregion/eslint-config";

export default [
  ...openregion,
];
```

The package exports one default array of flat config objects. CommonJS `.eslintrc` export is removed.

## Target Runtime

- Target ESLint major: ESLint 10.
- Required Node.js follows the strictest selected dependency requirement. If a selected dependency requires Node.js 22, the package declares that in `engines`.
- `index.js` is ESM because flat config examples and current ESLint documentation use ESM imports for shareable configs.

## Dependency Strategy

Remove `eslint-config-airbnb`. It is kept only as a migration reference because its last major config is legacy `.eslintrc` and its peer dependency range stops before new ESLint majors.

Use actively maintained packages that support flat config and current ESLint majors.

Peer dependencies:

- `eslint`
- `typescript-eslint`

Runtime dependencies shipped by this package:

- `@eslint/js`
- `globals`
- `eslint-plugin-import-x`
- `eslint-plugin-react-hooks`
- `@stylistic/eslint-plugin`
- React plugin:
  - Prefer `@eslint-react/eslint-plugin` for ESLint 10 compatibility.
  - Do not keep `eslint-plugin-react` if its peer dependency range rejects ESLint 10.
- JSX a11y plugin:
  - Keep `eslint-plugin-jsx-a11y` only if it works with the selected ESLint major without peer conflicts.
  - Otherwise document dropped a11y rules and rely on compatible React/browser rules until a compatible replacement is available.

## Rule Migration Policy

Use the current Airbnb-derived effective config as the source of behavior, then migrate it into explicit flat config rules.

Priority order:

1. Keep local overrides exactly where possible:
   - `no-console: warn`
   - `max-len: off`
   - `no-trailing-spaces: off`
   - `no-mixed-operators: off`
   - `no-underscore-dangle: off`
   - `no-shadow: off`
   - `dot-notation: off`
   - `implicit-arrow-linebreak: off`
   - `import/prefer-default-export: off`
   - `react/function-component-definition: off`
   - React JSX runtime support: no React-in-scope requirement.
2. Keep TypeScript-specific replacements:
   - core `no-use-before-define` off, TypeScript rule on.
   - core `no-unused-vars` off, TypeScript rule warn.
   - core duplicate import rule off, import duplicate rule on.
3. Migrate deprecated stylistic rules to `@stylistic/*` when the rule still adds value and does not conflict with formatters.
4. Drop rules that are removed, incompatible, or duplicated by TypeScript/React compiler-era best practices. Document each dropped rule in README.
5. Prefer current recommended configs as a baseline, then layer retained Airbnb-compatible rules and local overrides after them.

## Config Shape

The flat config includes:

- A base config for `**/*.{js,mjs,cjs,jsx,ts,tsx}`.
- A TypeScript config for `**/*.{ts,tsx}` using `typescript-eslint`.
- A React/JSX config for `**/*.{jsx,tsx}`.
- Browser globals plus existing readonly project globals:
  - `NODE_ENV`
  - `API_URL_ENV`
  - `VALIDATION_STATUS`
- Import resolver/settings compatible with the selected import plugin.
- Ignores only for generated/dependency directories that ESLint 10 does not already ignore.

## README Updates

README shows only the flat config import flow and lists required peer dependencies. It does not mention `.eslintrc` usage.

README also includes a short migration note:

- Airbnb is no longer a runtime dependency.
- Most old rule behavior is preserved explicitly.
- Incompatible/deprecated rules are replaced with maintained alternatives or intentionally dropped.

## Verification Plan

Add repo-native smoke tests that prove the package can be imported and used by ESLint:

- `node --test` test file that imports the package.
- `ESLint.lintText()` smoke cases for JavaScript, TypeScript, and TSX.
- Assertions for key rules:
  - `no-console` reports a warning.
  - `@typescript-eslint/no-unused-vars` reports a warning for TS.
  - duplicate imports are reported.
  - React hooks violations are reported for TSX.
  - JSX filename or JSX parsing behavior works for TSX.

Also run:

- `npm install`
- `npm test`

## Non-Goals

- No `.eslintrc` compatibility layer.
- No `FlatCompat` wrapping of Airbnb as the final implementation.
- No unrelated formatting or package metadata cleanup outside the migration.
