# hyphenCypressPOC

# "Cypress" with Docker POC
* This project is an example of how to setup and write cypress tests.

## Project Description:
* Setup cypress
* Write tests to test UI and API
* Run cypress in docker

## Setup:
* Install [Node js](https://nodejs.org/en/download/)
* Install [npm](https://www.npmjs.com/get-npm)
* Install [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html)
* Install [docker desktop] (https://docs.docker.com/desktop/)

## Run tests:
Switch to the cypress folder
* To run in local -  npx cypress run --spec cypress/integration/tests/createPost.js
* To run in a container - docker run -it -v $PWD:/e2e -w /e2e  --entrypoint=cypress cypress/included:4.9.0  run 

## View HTML report:
* HTML report will be generated under (cypress/report/mochawesome-report/)

## View execution video:
* Video will be generated under (cypress/videos/tests/)


