# ESLint Flat Config Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the legacy Airbnb `.eslintrc` shareable config with an importable ESLint 10 flat config.

**Architecture:** The package becomes ESM and exports one default flat-config array from `index.js`. Runtime plugin dependencies are imported by the package so consumers can import `@openregion/eslint-config` directly; ESLint and TypeScript remain peer dependencies. A generated `rules/legacy-airbnb-rules.js` snapshot preserves old Airbnb effective rules without keeping Airbnb as a runtime dependency. Smoke tests use the real ESLint 10 API against JS, TS, and TSX snippets.

**Tech Stack:** ESLint 10, flat config, `@eslint/js`, `typescript-eslint`, `eslint-plugin-import-x`, `eslint-plugin-react-hooks`, `@eslint-react/eslint-plugin`, `@stylistic/eslint-plugin`, Node.js test runner.

---

### Task 1: Add Flat Config Smoke Tests

**Files:**
- Create: `tests/eslint-config.test.js`
- Modify: `package.json`

- [ ] **Step 1: Add the test script**

Add this `scripts` block to `package.json`:

```json
"scripts": {
  "test": "node --test"
}
```

- [ ] **Step 2: Write the failing smoke tests**

Create `tests/eslint-config.test.js`:

```js
import assert from "node:assert/strict";
import test from "node:test";
import { ESLint } from "eslint";
import openregion from "../index.js";

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: openregion,
});

async function lint(code, filePath) {
  const [result] = await eslint.lintText(code, { filePath });
  return result.messages;
}

function ruleIds(messages) {
  return messages.map((message) => message.ruleId);
}

test("exports an ESLint flat config array", () => {
  assert.ok(Array.isArray(openregion));
  assert.ok(openregion.length > 0);
});

test("reports console usage as a warning", async () => {
  const messages = await lint('console.log("debug");\n', "sample.js");
  const consoleMessage = messages.find((message) => message.ruleId === "no-console");

  assert.equal(consoleMessage?.severity, 1);
});

test("reports TypeScript unused variables as warnings", async () => {
  const messages = await lint("const unused: string = \"value\";\n", "sample.ts");
  const unusedMessage = messages.find((message) => message.ruleId === "@typescript-eslint/no-unused-vars");

  assert.equal(unusedMessage?.severity, 1);
});

test("reports duplicate imports with import-x", async () => {
  const messages = await lint(
    "import path from \"node:path\";\nimport { join } from \"node:path\";\nconsole.log(path, join);\n",
    "sample.js",
  );

  assert.ok(ruleIds(messages).includes("import-x/no-duplicates"));
});

test("reports React hooks violations in TSX", async () => {
  const messages = await lint(
    "function useCustom() {}\nexport function Demo({ enabled }: { enabled: boolean }) {\n  if (enabled) {\n    useCustom();\n  }\n  return <button>{enabled}</button>;\n}\n",
    "sample.tsx",
  );

  assert.ok(ruleIds(messages).includes("react-hooks/rules-of-hooks"));
});

test("parses TSX without requiring React in scope", async () => {
  const messages = await lint(
    "type Props = { title: string };\nexport function Title({ title }: Props) {\n  return <h1>{title}</h1>;\n}\n",
    "sample.tsx",
  );

  assert.equal(
    messages.some((message) => message.message.includes("React")),
    false,
  );
});
```

- [ ] **Step 3: Run tests and verify red**

Run:

```bash
npm test
```

Expected: fails because the current package is not ESM and does not export an ESLint 10 flat config array yet.

### Task 2: Capture Legacy Airbnb Rule Snapshot

**Files:**
- Create temporary file: `/tmp/openregion-eslint-config-legacy-rules.json`

- [ ] **Step 1: Capture the current effective legacy rules before removing Airbnb**

Run this command while the repository still has the existing ESLint 8/Airbnb dependencies installed:

```bash
node <<'NODE' > /tmp/openregion-eslint-config-legacy-rules.json
const { ESLint } = require("eslint");

(async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "index.js",
  });
  const config = await eslint.calculateConfigForFile("sample.tsx");

  process.stdout.write(`${JSON.stringify(config.rules, null, 2)}\n`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
NODE
```

Expected: `/tmp/openregion-eslint-config-legacy-rules.json` exists and contains the resolved legacy `rules` object.

### Task 3: Upgrade Package Metadata and Dependencies

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Update `package.json` for ESM flat config**

Change `package.json` to include these fields:

```json
{
  "type": "module",
  "main": "./index.js",
  "exports": {
    ".": "./index.js"
  },
  "engines": {
    "node": "^22.13.0 || >=24"
  }
}
```

- [ ] **Step 2: Replace dependency declarations**

Use these package sections:

```json
"dependencies": {
  "@eslint-react/eslint-plugin": "^5.12.0",
  "@eslint/js": "^10.0.1",
  "@stylistic/eslint-plugin": "^5.10.0",
  "eslint-import-resolver-typescript": "^3.10.1",
  "eslint-plugin-import-x": "^4.17.1",
  "eslint-plugin-react-hooks": "^7.1.1",
  "globals": "^17.7.0",
  "typescript-eslint": "^8.63.0"
},
"peerDependencies": {
  "eslint": "^10.0.0",
  "typescript": ">=4.8.4 <6.1.0"
},
"devDependencies": {
  "eslint": "^10.6.0",
  "typescript": "^6.0.3"
}
```

- [ ] **Step 3: Install and refresh lockfile**

Run:

```bash
npm install
```

Expected: install succeeds without legacy Airbnb dependencies.

### Task 4: Generate the Static Airbnb-Compatible Rule Module

**Files:**
- Create: `rules/legacy-airbnb-rules.js`

- [ ] **Step 1: Transform the captured legacy rules for the new plugin set**

Run this command after `npm install` has installed the new ESLint 10 dependencies:

```bash
mkdir -p rules
node --input-type=module <<'NODE'
import fs from "node:fs";
import { builtinRules } from "eslint/use-at-your-own-risk";
import stylistic from "@stylistic/eslint-plugin";
import importX from "eslint-plugin-import-x";

const snapshotPath = "/tmp/openregion-eslint-config-legacy-rules.json";
const legacyRules = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
const stylisticRuleNames = new Set(Object.keys(stylistic.rules));
const importXRuleNames = new Set(Object.keys(importX.rules));
const skippedPrefixes = ["react/", "jsx-a11y/", "@typescript-eslint/"];
const transformedRules = {};
const droppedRules = {};

for (const [ruleId, value] of Object.entries(legacyRules)) {
  if (skippedPrefixes.some((prefix) => ruleId.startsWith(prefix))) {
    droppedRules[ruleId] = "Original plugin is not part of the ESLint 10 config.";
    continue;
  }

  if (ruleId.startsWith("import/")) {
    const importRuleName = ruleId.slice("import/".length);

    if (importXRuleNames.has(importRuleName)) {
      transformedRules[`import-x/${importRuleName}`] = value;
      continue;
    }

    droppedRules[ruleId] = "No matching eslint-plugin-import-x rule.";
    continue;
  }

  if (stylisticRuleNames.has(ruleId)) {
    transformedRules[`@stylistic/${ruleId}`] = value;
    continue;
  }

  if (builtinRules.has(ruleId)) {
    transformedRules[ruleId] = value;
    continue;
  }

  droppedRules[ruleId] = "Rule is not available in ESLint 10.";
}

const header = [
  "// Generated from the legacy Airbnb-derived effective config during the ESLint 10 migration.",
  "// Keep local overrides in index.js so they remain easy to audit.",
  "",
].join("\n");

const output = `${header}export const legacyAirbnbRules = ${JSON.stringify(transformedRules, null, 2)};\n\nexport const droppedLegacyRuleNotes = ${JSON.stringify(droppedRules, null, 2)};\n`;

fs.writeFileSync("rules/legacy-airbnb-rules.js", output);
NODE
```

Expected: `rules/legacy-airbnb-rules.js` exports `legacyAirbnbRules` and `droppedLegacyRuleNotes`.

### Task 5: Implement the Flat Config Export

**Files:**
- Modify: `index.js`
- Read: `rules/legacy-airbnb-rules.js`

- [ ] **Step 1: Replace `index.js` with an ESM flat config**

Use this implementation:

```js
import eslintReact from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import importX from "eslint-plugin-import-x";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
import { legacyAirbnbRules } from "./rules/legacy-airbnb-rules.js";

const sourceFiles = ["**/*.{js,mjs,cjs,jsx,ts,tsx}"];
const tsFiles = ["**/*.{ts,tsx}"];
const jsxFiles = ["**/*.{jsx,tsx}"];

const projectGlobals = {
  NODE_ENV: "readonly",
  API_URL_ENV: "readonly",
  VALIDATION_STATUS: "readonly",
};

const localBaseRules = {
  ...legacyAirbnbRules,
  "no-console": "warn",
  "no-underscore-dangle": "off",
  "no-shadow": "off",
  "dot-notation": "off",
  "no-use-before-define": "off",
  "no-unused-vars": "off",
  "no-duplicate-imports": "off",
  "@stylistic/arrow-parens": "warn",
  "@stylistic/max-len": "off",
  "@stylistic/no-trailing-spaces": "off",
  "@stylistic/no-mixed-operators": "off",
  "@stylistic/implicit-arrow-linebreak": "off",
  "@stylistic/space-before-function-paren": "off",
  "@stylistic/function-paren-newline": "off",
  "import-x/no-unresolved": "off",
  "import-x/extensions": "off",
  "import-x/prefer-default-export": "off",
  "import-x/no-duplicates": "error",
};

const localTypeScriptRules = {
  "@typescript-eslint/explicit-function-return-type": [
    "warn",
    {
      allowExpressions: true,
    },
  ],
  "@typescript-eslint/no-namespace": [
    "warn",
    {
      allowDeclarations: true,
    },
  ],
  "@typescript-eslint/no-use-before-define": "error",
  "@typescript-eslint/no-unused-vars": "warn",
};

export default defineConfig([
  js.configs.recommended,
  importX.flatConfigs.recommended,
  {
    files: sourceFiles,
    plugins: {
      "@stylistic": stylistic,
      "import-x": importX,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...projectGlobals,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: localBaseRules,
  },
  ...tseslint.configs.recommended,
  importX.flatConfigs.typescript,
  {
    files: tsFiles,
    rules: localTypeScriptRules,
  },
  {
    files: jsxFiles,
    extends: [
      eslintReact.configs.jsx,
      eslintReact.configs.dom,
      reactHooks.configs.flat.recommended,
    ],
  },
]);
```

- [ ] **Step 2: Run tests and fix only real compatibility errors**

Run:

```bash
npm test
```

Expected: smoke tests pass. If ESLint reports a renamed or unavailable rule, inspect the installed plugin rule list and either correct the rule name or document the rule as intentionally dropped.

### Task 6: Update README for Flat Config Consumers

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Replace legacy usage docs**

Use this README:

````md
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
````

- [ ] **Step 2: Run tests again**

Run:

```bash
npm test
```

Expected: all smoke tests pass.

### Task 7: Run Fresh Subagent Review Until Approve

**Files:**
- Review current implementation diff or the implementation commits against the plan.
- Modify only files required to fix review findings.

- [ ] **Step 1: Run mechanical verification**

Run:

```bash
npm test
git diff --check
```

Expected: tests pass and diff whitespace check passes.

- [ ] **Step 2: Dispatch a fresh spec reviewer subagent**

Reviewer context:

```text
Review target: current implementation diff in /Users/gruven/repository/github/eslint-config.
Requirements: docs/superpowers/specs/2026-07-08-eslint-flat-config-migration-design.md and docs/superpowers/plans/2026-07-08-eslint-flat-config-migration.md.
Scope: verify the flat config migration implements the agreed contract, dependency strategy, README migration notes, and smoke tests. Do not review history; inspect only the current diff and requirements.
Approval bar: return APPROVE only if there are no blocking spec gaps.
```

- [ ] **Step 3: Fix spec-review findings and re-run verification**

For each actionable Critical or Important finding:

```bash
npm test
git diff --check
```

Expected: verification passes after fixes.

- [ ] **Step 4: Re-run fresh spec review until approve**

Each cycle uses only the current diff and the same requirements. Do not tell the reviewer what changed in prior cycles unless the same finding repeats and needs one concise re-evaluation note.

- [ ] **Step 5: Dispatch a fresh code-quality reviewer subagent**

Reviewer context:

```text
Review target: current implementation diff in /Users/gruven/repository/github/eslint-config.
Requirements: importable ESLint 10 flat config package, explicit Airbnb-compatible rule preservation where possible, maintained replacements for deprecated/incompatible rules, and passing smoke tests.
Scope: check code quality, package metadata correctness, maintainability, test strength, and README accuracy. Do not review history; inspect only the current diff and requirements.
Approval bar: return APPROVE only if there are no blocking correctness, packaging, or test issues.
```

- [ ] **Step 6: Fix code-review findings and re-run verification**

For each actionable Critical or Important finding:

```bash
npm test
git diff --check
```

Expected: verification passes after fixes.

- [ ] **Step 7: Re-run fresh code-quality review until approve**

Each cycle uses only the current diff and requirements. The review gate closes only when the latest fresh reviewer pass explicitly approves or reports no blocking issues.
