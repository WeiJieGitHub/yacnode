module.exports = {
  'functional test init': (browser) => {
    browser
    .url('http://www.baidu.com')
      .waitForElementVisible('body', 1000)
      .end();
  },
};
