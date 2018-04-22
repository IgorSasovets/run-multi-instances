'use strict';

class SignInPage {
  constructor() {
    this.registerButton = $('.btn.dice-btn.dice-btn-secondary.register-btn');
    this.userNameField = $('#userName');
    this.passwordField = $('#password');
    this.signInButton = $('.btn.dice-btn.sign-in-btn');
    this.incorrectDataMessage = $('.text-danger');
  }

  async navigateToRegistrationPage() {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.registerButton), 10000);
    return this.registerButton.click();
  }

  async fillSignInData(userName, userPassword) {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.userNameField), 10000);
    await this.userNameField.sendKeys(userName);
    await this.passwordField.sendKeys(userPassword);
    return this.signInButton.click();
  }
}

module.exports = new SignInPage();
