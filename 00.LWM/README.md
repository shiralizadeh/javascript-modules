# Chapter 0 - Life Without modules

## TLDR

JavaScript modules allow you to break up your code into separate files.

Modules can correlate to each other by implementing the `import`/`export` principles (will be covered in the next chapters).

In a non-modular system, for using any resource that is placed in another file, you should make sure that resource somehow has been already loaded into the browser.

## Pros

- Simplicity: Without using modules, you can have all your code in a single file, making it easier to manage for small projects or simple scripts.
- No module loading: Non-module code does not require a module loading system, so you don't need to worry about configuring and setting up module bundlers or loaders.
- Immediate access to all resources: Since all the code is in one file, you have immediate access to all resources without worrying about asynchronous module loading.

## Cons

- Lack of organization: As your codebase grows, it becomes more difficult to maintain and navigate a single file containing all the code. It can lead to a lack of clarity and make it harder to find specific functionality.
- Limited reusability: Without modules, it is challenging to reuse code across different parts of the application or in other projects. You may end up duplicating code or have to manually manage dependencies.
- Difficulties with collaboration: Non-modular code can be problematic when multiple developers are working on a project. Concurrent modifications to a single file can lead to conflicts and make it harder to merge changes.

## How to run

- Clone the repository
- Open a terminal in `00.LWM` folder and run:

```
$ npm install
$ npm run start
```

- Open `localhost:8080` in your bowser.

## Used Packages

### devDependencies

- `http-server`: Runs http server on port `8080`

## Notes

- Later in the next step in repository, you will see typescript version of `guess-number.js` and `utilities.js`.
- `package.json` is there since we wanted to use `http-server`
