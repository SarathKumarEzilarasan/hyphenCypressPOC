/// <reference types="cypress" />
import 'cypress-wait-until';
import hyphenPage from '../../pages/hyphenPage';

const pages = new hyphenPage();
const url = Cypress.env("url");
const userName = Cypress.env("userName");
const verificationCode = Cypress.env("verificationCode");

context('Hyphen - create a post', () => {

    before(function () {
        cy.visit(url);
        cy.log("Opened the Website");
        pages.fillLoginCredentials(userName,verificationCode);
    })

    it('Create a new post', function () {
        cy.fixture('testData.json').then((data) => {
            pages.createPost(data.groupName, data.questionToBePosted);
        })
    })

})
