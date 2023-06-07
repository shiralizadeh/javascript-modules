# Asynchronous Module Definition (AMD)

## Description

AMD is a module system to run in Browsers.

In order to use modules you can put them in the dependency array of `define` function.

```
define(["lodash"], (_) => {
  // _ is lodash
})
```

Also, to defnie modules you can use `defnie` function.

```
define([...deps], (...deps) => {
  return module;
})
```

## Pros

- Works in browsers

## Cons

- Doesn't work in node.js

## Pros

- Works in browsers

## Cons

- Doesn't work in node.js

## How to run

- Clone the repository
- Open a terminal in `02.AMD` folder and run:

```
$ npm install
$ npm run build
$ npm run start
```

- Open `localhost:8080` in your bowser.

## Used Packages

###

- `lodash`: lodash library to use `random` utility.

### devDependencies

- `@types/node`: Definitely typed for node.js
- `@types/lodash`: Definitely typed for lodash library
- `@types/requirejs`: Definitely typed for requirejs library
- `http-server`: Runs http server on port `8080`
- `typescript`: Compiles `.ts` to `.js`

## Notes
