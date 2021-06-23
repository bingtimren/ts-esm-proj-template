# ts-esm-proj-template
Typescript / ES Module project template

The main purpose of this repository is to showcase a ES Module project built with Typescript, using ["opinionated tools"](https://github.com/bingtimren/op-tools) to support the development workflow.

<!-- toc -->

- [Basic assumptions](#basic-assumptions)
  * [Building](#building)
  * [Debugging](#debugging)
  * [Linting and Formatting](#linting-and-formatting)
  * [Testing](#testing)
  * [Versioning](#versioning)
  * [Publishing](#publishing)
  * [CI with Github Action](#ci-with-github-action)

<!-- tocstop -->

# Basic assumptions

Project layout:
- "/src": Typescript sources 
- "/dist": Output files (.js, .d.ts, .js.map, etc.) emitted by tsc 
- "/test": Tests are put under "test" dir and are named with suffix ".test.ts", ".spec.ts", ".test.js", or ".spec.js"
- "/docs": Documents, and generated API documents are put under "docs/api" dir

TSC Options:
- "module":"es2020": emit ESM codes
- "esModuleInterop": true
- "target": "ES2020"

## Building

`yarn build`

## Debugging

Open a test file (.test.ts) in VS Code, add a break point, then use "Active Jest Test" launch option to run the test.

## Linting and Formatting

Linting and prettier is done upon git commit. To manually lint files, run

`yarn op-lint **/*.ts **/*.js **/*.json`

## Testing

`yarn test`

## Versioning

- Initial version is 0.1.0

Use semver or semantic-release to version or release


## Publishing

- Default registry is set to use a local private registry ([Verdaccio](https://verdaccio.org/en/)). It's best to first publish to a local registry for development and testing, and only publishes to a public registry when a release is tested and stable. 

## CI with Github Action

See .github/workflows/build-test.yaml for details.

