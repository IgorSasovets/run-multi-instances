'use strict';
const params = browser.params;
const RegistrationPage = require('./PageObjects/RegistrationPage');
const SignInPage = require('./PageObjects/SignInPage');

describe('Registration negative test', () => {
  beforeAll(async() => {
    await browser.get(params.pageUrl);
    await SignInPage.navigateToRegistrationPage();
  });
  describe('Confirm ability to register user in system', () => {
    it('Should negative open registration page and fill data fields', async function() {
      await RegistrationPage.fillRegistrationData('example@gmail.com', 'test1Test');
      expect(RegistrationPage.registrationFailedNotification.isDisplayed()).toBe(true);
    });
  });
});
