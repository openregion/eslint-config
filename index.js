import { fixupConfigRules } from '@eslint/compat';
import xoReact from 'eslint-config-xo-react';

/** @type {import('xo').FlatXoConfig} */
const config = [
  {
    space: true,
    bracketSpacing: true,
    prettier: true,
  },
  ...fixupConfigRules(xoReact()),
];

export default config;
