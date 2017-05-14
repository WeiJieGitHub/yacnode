const webpackConfig = require('../../build/webpack.test.config');
const fileGlob = './specs/**/*spec.js*';

module.exports = (config) => {
  config.set({
    hostname: '127.0.0.1',
    frameworks: ['jasmine'],
    files: [fileGlob],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only',
    },
    preprocessors: {
      [fileGlob]: ['webpack'],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverageReport',
    },
  });
}
