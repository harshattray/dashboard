## DynamicForms

## Basic Overview

Built with react, redux , webpack integration with babel loaders processing custom css and js modules and transpiling them.

Redux dev tools are still enabled in this, mapped to the store so that dispached actions can be tracked (install redux dev tools plugin [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en))

## Installation Instructions

=========================

## Initial Project Setup

Project Initialisation involves standard procedures listed below

Clone the repo

      git clone https://github.com/harshattray/dashboard.git

Install npm modules

      npm install --save

Install dev dependencies

      npm install --save-dev

## Run the project

      npm start - fires up the webpack dev server with hot module replacement on port 3004
      npm run build - runs the production setup with a clean purge
      npm run  deploy - runs build and commit deploy, creates a githubpages branch and deploys to github pages (make sure all your api calls are https)

## Run the Test Cases

      npm run cypress -  runs a complete automated test of the workflows.

## Dependencies

- [react](https://github.com/facebook/react): 16.0.0
- [redux](https://github.com/reduxjs/redux) : 3.7.2
- [react-redux](https://github.com/reduxjs/redux) : 5.0.6
- [redux-form](https://github.com/erikras/redux-form) : ^7.4.2
- [redux-thunk](https://github.com/reduxjs/redux-thunk) : 2.2.0
- [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React) :^0.82.5
- [webpack](https://github.com/webpack/webpack) : 3.5.6
- [enzyme](https://github.com/airbnb/enzyme) : ^3.6.0
- [jest](https://github.com/facebook/jest) : ^23.6.0
