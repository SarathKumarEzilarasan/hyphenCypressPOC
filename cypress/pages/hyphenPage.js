export default class hyphenPage {

    constructor() {
        this.cookieButton = "#CybotCookiebotDialogBodyLevelButtonAccept";
        this.userNameInput = "#inputGroupField";
        this.loginButton = '[class$="loginButton"]';
        this.submitButton = "#_submit";
        this.passwordInput = '[type="password"]';
        this.submitPassword = '[class="hyphenButton btn btn-primary"]';
        this.createButton = '#create-button';
        this.openButton = '[class="row"]:nth-child(2) [class="hyphenButton poll-btn btn btn-default"]';
        this.openDropDown = '.Select-placeholder';
        this.dropDownText = '[role="combobox"]';
        this.selectOption = '[id="react-select-2--option-0"]';
        this.selectButton = '[class="hyphenButton group-select-btn btn btn-default"]';
        this.questionText = '#textAreaField';
        this.postQuestion = '[class="hyphenButton smallButton btn btn-default"]';
        this.posts = '[class="verticalCentered row"] span';
    }

    fillLoginCredentials(userName, verificationCode) {
        cy.clickElement(this.cookieButton);
        cy.setElement(this.userNameInput,userName);
        cy.clickElement(this.loginButton);
        cy.log("Entered the Username");
        cy.setElement(this.passwordInput, verificationCode);
        cy.clickElement(this.submitPassword);
        cy.log("Logged in successfully");
    }

    createPost(groupName, question) {
        cy.clickElement(this.createButton);
        cy.log("Create post pop up");
        cy.clickElement(this.openButton);
        cy.clickElement(this.openDropDown);
        cy.setElement(this.dropDownText, groupName);
        cy.clickElement(this.selectOption);
        cy.clickElement(this.selectButton);
        cy.clickElement(this.questionText);
        cy.setElement(this.questionText, question);
        cy.clickElement(this.postQuestion);
        cy.waitForElementToBeVisible(this.createButton);
        cy.contains(this.posts, question);
        cy.log("Question posted successfully");
    }
}
