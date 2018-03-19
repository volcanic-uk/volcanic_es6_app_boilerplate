# Volcanic es6 boilerplate project starter
An opinionated boilerplate to start es6 projects at volcanic

## How to setup

Clone this repository
```bash
git clone https://github.com/volcanic-uk/volcanic_es6_app_boilerplate.git
```
Then rename the newly downloaded folder to your project name.

cd to the downloaded folder.

then run:
```bash
npm init
```
Set up your package by answering the questions on your terminal.

Once finished run
```bash
npm install
```

## Dev server 
to run the dev server on localhost
```bash
npm start
```

## Build to production
To build and transpile the project run
```bash
npm run build
```
then to run the production code locally 
```bash
npm run server
```
make sure that your build the project before running the server in production.

## Run tests
For testing we are using Mocha & Chai and webpack with mocha-loader to run tests in the browser
The following will open your browser and run the tests in the application interface directly 
```bash
npm test
```

The test command will do 3 things: 

- Run all your unit tests in node environment ( to run only this you can run `npm run test:cli`).
- Compile and build a development server and test files to run the tests in the browser ( to run only this you can run `npm run test:e2e`).
- Lint your entire application ( to run only this you can run `npm run lint`).

### Linting

you can lint everything you write in the src folder by running the command 
```bash
npm run  lint
```
to try and auto fix some linting issues, run 
```bash
npm run  lint:fix
```

When you run `npm start`, `npm test` or `npm build` the lint command will run.

## Making new commits
**Always make sure to run `npm run build` before you commit changes.**

This boilerplate utilizes [angular commit style](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message) for new commits.

## Deploy to now

**Always make sure to `npm run build` before you deploy.**
 To test outside of your localhost run the following command and follow the instructions
```bash
now --public
```
## Configs 
We are using webpack to build the project with 3 types of configs:
- Dev
- Test
- Production

more to come ... 👻