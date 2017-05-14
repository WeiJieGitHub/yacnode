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
    // 不适合许多场景，详见
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/91
    "jsx-a11y/no-static-element-interactions": 0,
  },
}
