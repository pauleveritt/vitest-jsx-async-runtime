# jsx-async-runtime and Vitest

Explain [a ticket in the jsx-async-runtime](https://github.com/jeasx/jsx-async-runtime/issues/3)
repo about rendering inside a Vitest test.

## Summary

1. Run `npm run console` to see it work correctly outside Vitest.

2. Run `npm run test` to see it fail when running inside Vitest.

Here is the traceback:

```
TypeError: Cannot read properties of undefined (reading 'call')
    at Module.o (file:///Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/node_modules/jsx-async-runtime/dist/esm/index.js:1:2181)
    at Module.o (file:///Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/node_modules/jsx-async-runtime/dist/esm/index.js:1:2071)
    at Module.o (file:///Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/node_modules/jsx-async-runtime/dist/esm/index.js:1:2215)
    at /Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/hello.tsx:11:16
    at VitestExecutor.runModule (file:///Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/node_modules/vite-node/dist/client.mjs:397:5)
    at VitestExecutor.directRequest (file:///Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/node_modules/vite-node/dist/client.mjs:379:5)
    at VitestExecutor.cachedRequest (file:///Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/node_modules/vite-node/dist/client.mjs:204:14)
    at VitestExecutor.dependencyRequest (file:///Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/node_modules/vite-node/dist/client.mjs:257:12)
    at /Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/hello.test.tsx:3:31
    at VitestExecutor.runModule (file:///Users/pauleveritt/WebstormProjects/vitest-jsx-async-runtime/node_modules/vite-node/dist/client.mjs:397:5)
```