
# Comparables Micro Frontend

This is a Vite project that serves as a ReactJS micro frontend for the Comparables application.
For more info on Vite follow: https://vitejs.dev

## Getting Started

To get started, clone the repository and install the dependencies:

    npm i
    
## Development

To start the development server, run the following command:

    npm run dev
    
This will start the development server and open the application in your default browser.

## Unit tests
Vitest is used as the test runner, this uses react-testing library and jest under the hood.
To run the unit tests for the application, run the following command:

    npm  run  test

This will start the development server and open the application in your default browser.

## Deployment

 - To build for integration with a host, run `npm run build-integrated`
 - To build standalone run `npm run build-standalone`

## Configuration

The configuration for the application can be found in the `vite.config.js` file. This file contains the configuration options for the development and production environments.

## Linting - Formatting
 - [Rome tools](https://rome.tools/) is used for the linting and formatting code.
 - [Stylelint](https://stylelint.io/) is used for the linting of CSS/SASS.
 - [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) are used for linting and formatting changed files on every commit  (pre-commit hook).
