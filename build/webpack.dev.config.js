const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const config = require('../config');

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  devtool: 'source-map',
  devServer: {
    port: config.PORT,
    host: config.HOST,
  },
  entry: {
    app: path.resolve(SRC_PATH, 'app.jsx'),
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js',
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, 'index.html'),
    }),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: SRC_PATH,
      exclude: /node_modules/,
      enforce: 'pre',
    }, {
      test: /\.scss$/,
      use: [
        {
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
          options: {
            sourceMap: true,
          },
        }
      ],
      include: SRC_PATH,
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: SRC_PATH,
      options: {
        sourceMap: true,
        presets: ['es2015', 'react'],
      },
      exclude: /node_modules/,
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
};
