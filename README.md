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
Switch to the cypress folder (passing the verification code as a command line argument for security reason)
* To run in local - CYPRESS_verificationCode=34067 npx cypress run --spec cypress/integration/tests/createPost.js 
* To run in a container - docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_verificationCode=34067  --entrypoint=cypress cypress/included:4.9.0  run


## View HTML report:
* HTML report will be generated under (cypress/report/mochawesome-report/)

## View execution video:
* Video will be generated under (cypress/videos/tests/)

## Test WorkFlow:
* When the execution starts the page objects,test data and credentials will be loaded from hyphenPage.js,fixtures/testData.json and cypress.env.json respectively.
* Element interactions in the UI will be done by custom commands defined in support/commands.js
* Website will be launched.
* User datas will be entired in the respective fields.
* Create post pop up will be invoked by clicking on create button.
* "R&D team" will be entered in the group name drop down.
* Then a question will be typed and posted in hyphen.
