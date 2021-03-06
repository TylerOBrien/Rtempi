/**
 * Global Imports
*/

const path = require('path');

/**
 * Exports
*/

module.exports = {
  entry: [
    `./src/app/${ process.env.APP_DOMAIN }/index.ts`,
    './resources/sass/app.scss'
  ],

  output: {
    filename: 'bundle.[contenthash].js',
    chunkFilename: '[id].[contenthash].js',
    path:  path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.css', '.sass', '.scss', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
};
