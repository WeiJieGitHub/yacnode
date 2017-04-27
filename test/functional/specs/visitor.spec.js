const { HOST, PORT, TIMEOUT } = require('../../../config');

module.exports = {
  'should render correct pages through routes': (browser) => {
    // 一个访客在编程社区上看到了网站的链接，
    // 通过链接，他来到了网站的首页。
    const client = browser.url(`http://${HOST}:${PORT}`);
    client.waitForElementVisible('body', TIMEOUT);
    // 他注意到了网页抬头处的标题「CNode」。
    client.assert.containsText('[data-role=title]', 'CNode');

    // 内容区显示着「Home」他知道处于首页
    client.assert.containsText('[data-role=home]', 'Home');

    // 他想看看其他页面的内容
    // 于是他点击了导航条上的「精华」页签
    client.click('[data-role=nav] a[href="#/good"]');

    // 内容区显示着「Good」他知道他来到了精华页面
    client.assert.containsText('[data-role=good]', 'Good');

    // 然后他逐个点击了「分享」「问答」「招聘」 页签
    // 页面显示了相应的内容
    client.click('[data-role=nav] a[href="#/share"]');
    client.assert.containsText('[data-role=share]', 'Share');

    client.click('[data-role=nav] a[href="#/ask"]');
    client.assert.containsText('[data-role=ask]', 'Ask');

    client.click('[data-role=nav] a[href="#/job"]');
    client.assert.containsText('[data-role=job]', 'Job');

    // 最后他得出结论，这是个烂网站，于是关闭了页面
    client.end();
  },
};
