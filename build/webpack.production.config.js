const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry: {
    app: path.resolve(SRC_PATH, 'app.jsx'),
  },
  output: {
    path: DIST_PATH,
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
      minChunks: (module) => {
        return module.context &&
               module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]', 'postcss-loader', 'sass-loader']
      }),
      include: SRC_PATH,
    },{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: SRC_PATH,
      options: {
        presets: ['es2015', 'react'],
      },
      exclude: /node_modules/,
    }, {
      test: /\.svg$/,
      loader: 'file-loader',
    }, {
      test: /\.(woff|eot|ttf)$/,
      loaders: ['url-loader?prefix=font/&limit=10000&mimetype=application/font-woff'],
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
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
      'assets': path.resolve(SRC_PATH, 'assets'),
      'layouts': path.resolve(SRC_PATH, 'layouts'),
      'reduxConf': path.resolve(SRC_PATH, 'redux'),
      'routes': path.resolve(SRC_PATH, 'routes'),
    },
  },
};
