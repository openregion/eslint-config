# XO Config Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the legacy Airbnb ESLint config package with a version `2.0.0` XO config package for React and TypeScript projects.

**Architecture:** The package becomes an ESM module that exports a single XO flat config array from `index.js`. Consumers re-export that array from `xo.config.js`; legacy `.eslintrc` compatibility is intentionally removed. React support is provided by spreading `eslint-config-xo-react` through `@eslint/compat`.

**Tech Stack:** Node.js ESM, npm, XO 4.x, package exports.

---

### Task 1: Package Metadata And Dependencies

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Update `package.json`**

Set version `2.0.0`, enable ESM, point exports to `index.js`, remove Airbnb-era dependencies and peer dependencies, and add `xo`, `eslint-config-xo-react`, and `@eslint/compat`.

- [ ] **Step 2: Refresh npm lockfile**

Run: `npm install`

Expected: `package-lock.json` resolves `xo` and no longer includes `eslint-config-airbnb`.

### Task 2: XO Config Export

**Files:**
- Modify: `index.js`

- [ ] **Step 1: Replace CommonJS ESLint config**

Export a default XO config array:

```js
import {fixupConfigRules} from '@eslint/compat';
import xoReact from 'eslint-config-xo-react';

/** @type {import('xo').FlatXoConfig} */
const config = [
  {
    space: true,
  },
  ...fixupConfigRules(xoReact()),
];

export default config;
```

- [ ] **Step 2: Verify Node can import it**

Run: `node -e "import('./index.js').then(({default: config}) => console.log(Array.isArray(config), config[0].space, config.length > 1))"`

Expected output: `true true true`

### Task 3: Documentation

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Rewrite usage docs**

Document npm install, `xo.config.js`, and `npx xo`.

- [ ] **Step 2: Verify README examples match package contract**

Check that the README re-exports the default export from `@openregion/eslint-config` in `xo.config.js`.

### Task 4: Consumer Smoke Test

**Files:**
- Create temporary files outside the committed tree only

- [ ] **Step 1: Create a temporary consumer fixture**

Create a temp directory, install this package from the local checkout, create `xo.config.js`, `index.tsx`, and `tsconfig.json`.

- [ ] **Step 2: Run XO against the fixture**

Run: `npx xo`

Expected: XO loads the shared config and lints the TypeScript React sample without config-loading errors.

### Task 5: Final Verification

**Files:**
- Inspect: `git diff`

- [ ] **Step 1: Check for removed legacy packages**

Run: `rg "eslint-config-airbnb|\"airbnb\"|airbnb/hooks" package.json package-lock.json index.js README.md`

Expected: no Airbnb references remain.

- [ ] **Step 2: Review final diff**

Run: `git diff -- package.json package-lock.json index.js README.md`

Expected: diff contains only the XO migration and docs updates.
