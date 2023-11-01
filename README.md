# famcs-react-course-2023

This repository contains a sample project and materials within the course
"Developing in the JavaScript Programming Language" at the FAMCS of BSU.

The project itself is a TODO application, which demonstrates the usage of
the topics covered during the course.

## Getting started

We use [npm](https://www.npmjs.com) as a package manager.

First, you need to prefill `.env.local` with the required values, if you do not have one.

For example,

```bash
cp .env .env.local
```

Then install dependencies:

```bash
npm install
```

After these steps, you can run the application by

```bash
npm run start
```

## Available Scripts

In the project directory, you can run:

- `npm run analyze` - generates a report with bundle analysis (require `npm run build`)
- `npm run build` - builds the production build
- `npm run eject` - [ejects CRA](https://create-react-app.dev/docs/available-scripts/#npm-run-eject)
- `npm run lint` - runs [ESLint](https://eslint.org) against all `js` code
- `npm run pre-commit` - runs checks before each commit
- `npm run prettier` - entry point for [`Prettier`](https://prettier.io)
- `npm run prepare` - automatically enable git hooks after install
- `npm run start` - runs the application in development mode
- `npm run stylelint` - runs [Stylelint](https://stylelint.io) for all styles
- `npm run test` - launches the test runner in the interactive watch mode
