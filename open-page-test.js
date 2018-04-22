'use strict';
const params = browser.params;
const SignInPage = require('./PageObjects/SignInPage');

describe('Load page test', () => {
  beforeAll(() => browser.get(params.pageUrl));
  describe('Confirm ability to open page fast', () => {
    it('Should successfully open page and fill data fields', async function() {
      await SignInPage.fillSignInData('John Smith', 'Pass');
      await browser.wait(protractor.ExpectedConditions.visibilityOf(SignInPage.incorrectDataMessage), 5000);
      expect(SignInPage.incorrectDataMessage.isDisplayed()).toBe(true);
    });
  });
});
