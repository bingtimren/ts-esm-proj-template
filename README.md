# ts-esm-proj-template
Typescript / ES Module project template

The main purpose of this repository is to showcase a ES Module project built with Typescript, using ["opinionated tools"](https://github.com/bingtimren/op-tools) to support the development workflow.

<!-- toc -->

- [Basic assumptions](#basic-assumptions)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Workflow](#workflow)
  * [Building](#building)
  * [Debugging](#debugging)
  * [Linting](#linting)
  * [Testing](#testing)
  * [Versioning](#versioning)
  * [Publishing](#publishing)
  * [CD with Github Action](#cd-with-github-action)

<!-- tocstop -->

# Basic assumptions
- The project is to build a ES Module package with Typescript. No CommonJS support.
- Adopts a project structure with "src", "tests" directories
- Build into "dist" dir
- Development workflow involves linting with eslint, and testing with jest
- 

# Getting Started


# Project Structure

- "src": this is the ["rootDir"](https://www.typescriptlang.org/tsconfig) field in the effective TSC configuration. Only Typescript sources under this folder is compiled and emitted to "dist" dir. Tests can also be put here with name "*.spec.ts", "*.test.ts", "*.spec.js", "*.test.js", "*.
- "tests": tests can be put in "src" and "tests" folder. 


# Workflow



## Building

## Debugging


## Linting

## Testing

## Versioning

- Initial version is 0.1.0
- 



## Publishing

- Default registry is set to use a local private registry ([Verdaccio](https://verdaccio.org/en/)). It's best to first publish to a local registry for development and testing, and only publishes to a public registry when a release is tested and stable. 

## CD with Github Action



