module.exports = {
  'functional test init': (browser) => {
    browser
    .url('http://localhost:8081')
      .waitForElementVisible('body', 1000)
      .end()
  },
}
