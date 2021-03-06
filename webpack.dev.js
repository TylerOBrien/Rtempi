/**
 * Global Imports
*/

require('dotenv').config();

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Exports
*/

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    host: process.env.DEV_SERVER_HOST || '127.0.0.1',
    port: process.env.DEV_SERVER_PORT || 8080,
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    allowedHosts: [
      process.env[process.env.APP_DOMAIN.toUpperCase() + '_DOMAIN']
    ]
  },

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
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'staging/index.html'),
      filename: 'index.html'
    })
  ]
});
