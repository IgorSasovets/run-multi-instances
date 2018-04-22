'use strict';

class RegistrationPage {
  constructor() {
    this.emailField = element(by.name('Email'));
    this.passwordField = $$('.form-group input').get(1);
    this.confirmPasswordField = element(by.name('confirmPassword'));
    this.createAccountButton = $('.btn.dice-btn.create-account');
    this.registrationFailedNotification = $('.alert-dismissible');
  }

  async fillRegistrationData(userEmail, userPassword) {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.passwordField), 5000);
    await this.emailField.sendKeys(userEmail);
    await this.passwordField.sendKeys(userPassword);
    await this.confirmPasswordField.sendKeys(userPassword);
    return this.createAccountButton.click();
  }
}

module.exports = new RegistrationPage();
