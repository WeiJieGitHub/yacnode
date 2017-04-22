module.exports = {
  root: true,
  extends: 'airbnb',
  env: {
    node: true,
    es6: true,
    browser: true,
    amd: true,
  },
  settings: {
    'import/resolver': {
      'webpack': { config: 'build/webpack.dev.config.js'}
    },
  },
  rules: {
  },
}
