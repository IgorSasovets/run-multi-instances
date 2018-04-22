exports.config = {
  directConnect: true,
  multiCapabilities: [
    {
      browserName: 'chrome',
      maxInstances: 1
    },
    {
      browserName: 'firefox',
      maxInstances: 1
    }
  ],
  specs: [
    'open-page-test.js',
    'open-page-another-test.js'
  ],
  params: {
    pageUrl: 'https://www.dice.com/employer/login'
  }
}
