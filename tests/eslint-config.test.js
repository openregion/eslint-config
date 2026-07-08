import assert from "node:assert/strict";
import test from "node:test";
import { ESLint } from "eslint";
import openregion from "@openregion/eslint-config";
import {
  droppedLegacyRuleNotes,
  legacyJsxA11yXRules,
  legacyReactReplacementRules,
  legacyRuleReplacementNotes,
} from "../rules/legacy-airbnb-rules.js";

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

test("keeps TypeScript rules scoped to TypeScript files", async () => {
  const jsConfig = await eslint.calculateConfigForFile("sample.js");
  const tsConfig = await eslint.calculateConfigForFile("sample.ts");

  assert.equal(jsConfig.rules["@typescript-eslint/no-unused-vars"], undefined);
  assert.equal(tsConfig.rules["@typescript-eslint/no-unused-vars"]?.[0], 1);
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

test("reports React replacement rules in TSX", async () => {
  const messages = await lint(
    "export function List() {\n  return <>{[1, 2].map((value) => <span>{value}</span>)}</>;\n}\n",
    "sample.tsx",
  );

  assert.ok(ruleIds(messages).includes("@eslint-react/no-missing-key"));
});

test("reports migrated JSX accessibility rules", async () => {
  const messages = await lint(
    "export function Image() {\n  return <img src=\"logo.png\" />;\n}\n",
    "sample.jsx",
  );

  assert.ok(ruleIds(messages).includes("jsx-a11y-x/alt-text"));
});

test("reports React DOM replacement rules", async () => {
  const messages = await lint(
    "export function Button() {\n  return <button>Save</button>;\n}\n",
    "sample.tsx",
  );

  assert.ok(ruleIds(messages).includes("@eslint-react/dom-no-missing-button-type"));
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

test("separates migrated legacy rules from true drops", () => {
  assert.equal(droppedLegacyRuleNotes["react-hooks/rules-of-hooks"], undefined);
  assert.equal(droppedLegacyRuleNotes["@typescript-eslint/no-unused-vars"], undefined);
  assert.equal(droppedLegacyRuleNotes["jsx-a11y/anchor-is-valid"], undefined);
  assert.equal(droppedLegacyRuleNotes["react/jsx-space-before-closing"], undefined);
  assert.equal(droppedLegacyRuleNotes["react/jsx-uses-vars"], undefined);
  assert.equal(droppedLegacyRuleNotes["require-jsdoc"], undefined);

  assert.equal(
    legacyRuleReplacementNotes["react-hooks/rules-of-hooks"]?.replacement,
    "react-hooks/rules-of-hooks",
  );
  assert.equal(
    legacyRuleReplacementNotes["@typescript-eslint/no-unused-vars"]?.replacement,
    "@typescript-eslint/no-unused-vars",
  );
  assert.equal(
    legacyRuleReplacementNotes["jsx-a11y/anchor-is-valid"]?.replacement,
    "jsx-a11y-x/anchor-is-valid",
  );
  assert.equal(
    legacyRuleReplacementNotes["react/jsx-space-before-closing"]?.replacement,
    "@stylistic/jsx-tag-spacing",
  );
  assert.equal(
    legacyRuleReplacementNotes["react/jsx-uses-vars"]?.replacement,
    "ESLint 10 JSX reference tracking",
  );
  assert.equal(
    legacyRuleReplacementNotes["require-jsdoc"]?.replacement,
    "jsdoc/require-jsdoc",
  );

  assert.ok(legacyJsxA11yXRules["jsx-a11y-x/lang"]);
  assert.equal(legacyReactReplacementRules["@eslint-react/dom-no-missing-button-type"], "error");
  assert.ok(droppedLegacyRuleNotes["react/prop-types"]);
  assert.ok(droppedLegacyRuleNotes["jsx-a11y/accessible-emoji"]);
});
