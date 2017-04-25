const { HOST, PORT, TIMEOUT } = require('../../../config');

module.exports = {
  'can render correct pages through routes': (browser) => {
    // 一个访客在编程社区上看到了网站的链接，
    // 通过链接，他来到了网站的首页。
    const client = browser.url(`http://${HOST}:${PORT}`);
    client.waitForElementVisible('body', TIMEOUT);
    // 他注意到了网页抬头处的标题「CNode」。
    client.assert.containsText('[data-role=title]', 'CNode');

    client.end();
  },
};
