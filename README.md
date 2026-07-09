# Open Region XO Config

Shared XO config for Open Region JavaScript, TypeScript, and React projects.

## Installation

```shell
npm install --save-dev xo @openregion/eslint-config
```

## Usage

Create `xo.config.js`:

```js
export {default} from '@openregion/eslint-config';
```

Run XO:

```shell
npx xo
```

The config enables XO's React rules and 2-space indentation. TypeScript files are handled by XO.
