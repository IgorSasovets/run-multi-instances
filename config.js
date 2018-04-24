exports.config = {
  directConnect: true,
  multiCapabilities: [
    {
      browserName: 'chrome',
      maxInstances: 1,
      specs: [
        'open-page-test.js'
      ]
    },
    {
      browserName: 'firefox',
      maxInstances: 1,
      specs: [
        'open-page-another-test.js'
      ]
    }
  ],
  params: {
    pageUrl: 'https://www.dice.com/employer/login'
  },
  onPrepare: function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
  }
}
