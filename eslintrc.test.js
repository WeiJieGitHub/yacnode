const baserc = require('./.eslintrc.js');

module.exports = Object.assign(baserc, { 
  globals: {
    describe: true,
    it: true,
    expect: true
  },
});
