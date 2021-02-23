/**
 * Global Imports
*/

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Exports
*/

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|resources|staging|dist/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules|resources|staging|dist/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css|sass|scss$/,
        exclude: /node_modules|staging|dist/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
});
