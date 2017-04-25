const baserc = require('./.eslintrc.js');

module.exports = Object.assign(baserc, { 
  globals: {
    describe: true,
    xdescribe: true,
    it: true,
    xit: true,
    expect: true,
    spyOn: true,
    beforeEach: true,
    afterEach: true,
    jasmine: true,
    fail: true,
  },
});
