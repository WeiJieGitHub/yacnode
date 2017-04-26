const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre',
      options: {
        configFile: ROOT_PATH + '/eslintrc.test.js',
      },
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        sourceMap: true,
        presets: ['es2015', 'react'],
        plugins: ['istanbul'],
      },
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: '[name]__[local]-[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
      }, {
        loader: 'sass-loader',
      }],
    }],      
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      'views': path.resolve(SRC_PATH, 'views'),
      'components': path.resolve(SRC_PATH, 'components'),
      'utils': path.resolve(SRC_PATH, 'utils'),
      'containers': path.resolve(SRC_PATH, 'containers'),
      'styles': path.resolve(SRC_PATH, 'styles'),
      'layouts': path.resolve(SRC_PATH, 'layouts'),
    },
  },
  // 这是个 hack!
  // 相关链接: https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }
}
