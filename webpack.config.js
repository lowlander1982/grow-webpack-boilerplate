'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  context: __dirname + '/src',
  entry: { // The idea is to make this entry point dynamic according to yaml modules
    index: './js/index.js',
    'subfolder/index': './js/subfolder/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js',
    publicPath: "/assets",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ "babel-preset-es2015" ].map(require.resolve)
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    })
  ],
  devtool: "eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}

module.exports = config;
