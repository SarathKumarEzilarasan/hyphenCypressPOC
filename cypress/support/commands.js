
Cypress.Commands.add('loginUI', () => {

    cy.visit('app.gethyphen.com');
    cy.log("Opened the Website");
    cy.get('#CybotCookiebotDialogBodyLevelButtonAccept').click();
    cy.get('#inputGroupField').type('hyphen_admin@acmetest.com');
    cy.get('[class$="loginButton"]').click();
    cy.log("Entered the Username");
    waitForElementToBeVisible('[type="password"]').type('34067');
    cy.get('[class="hyphenButton btn btn-primary"]').click();
    cy.log("Logged in successfully");

})


Cypress.Commands.add('loginAPI', () => {

    cy.request({
        method: 'POST',
        url: 'https://api.gethyphen.com/parse/login',
        body: {
            "username": "hyphen_admin@acmetest.com",
            "password": "34067",
            "_method": "GET",
            "_ApplicationId": "62aa263f6702b4e7552e0ffd66cd17ca76eb0a39",
            "_ClientVersion": "js1.10.0",
            "_InstallationId": "3f22b4e1-e4c9-b050-257f-5d32116ca7c7"
        }
    }).then((resp) => {
        window.localStorage.setItem("_ApplicationId", "62aa263f6702b4e7552e0ffd66cd17ca76eb0a39");
        window.localStorage.setItem("_ClientVersion", "js1.10.0");
        window.localStorage.setItem("_InstallationId", "3f22b4e1-e4c9-b050-257f-5d32116ca7c7");
        window.localStorage.setItem("_SessionToken", resp.body.sessionToken);
    })

})   

Cypress.Commands.add('getTasks', () => {
    cy.request({
        method: 'POST',
        url: 'https://api.gethyphen.com/parse/functions/getTasks',
        body: {
            "onlyMine": "true",
            "_ApplicationId": "62aa263f6702b4e7552e0ffd66cd17ca76eb0a39",
            "_ClientVersion": "js1.10.0",
            "_InstallationId": "07d52dd2-50b0-2c87-ed1d-85ed6193d741",
            "_SessionToken": window.localStorage.getItem("_SessionToken")
        }
    })

})


Cypress.Commands.add('waitForElementToBeVisible', (ele) => {
    return cy.waitUntil(() => cy.get(ele).should('be.visible'), {
        timeout: 50000,
        interval: 100
    }
    );
})

Cypress.Commands.add('clickElement', (ele) => {
    cy.get(ele,{timeout:60000}).click();

})

Cypress.Commands.add('setElement', (ele, value) => {
    cy.get(ele,{timeout:60000}).type(value,{log: false});
})

