# CommonJS Modules (CJS)

## Description

CommonJS is the original module system in Node.js. Browsers cannot load CJS modules without polyfills.

In order to import modules you can call `require('MODULE_NAME')` function.

```
const _ = require("lodash");
```

Also, to export modules you must assign `module.exports` to an object contains functions/variables/... to export.

```
const foo = 12;

module.exports = {
  foo,
};
```

## Pros

- Native Module System in Node.js
- Most libraries are supporting it

## Cons

- Doesn't work in browsers
- Fashion way of the modularity
- Most bundles doesn't do tree shake it

## How to run

- Clone the repository
- Open a terminal in this (`01.CJS`) folder and run:
  ```
  $ npm install
  ```
- To compile `.ts` files (production) you can run:
  ```
  $ npm run build
  ```
- To watch `.ts` files (development) you can run:
  ```
  $ npm run watch
  ```

## Notes

- In order to use CommonJS in Typescript we need DefinitelyTyped (`.d.ts`) files. We installed `@types/node` package.