'use strict'

const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: './index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    filename: '[name].bundle.js',
    contentBase: path.resolve(__dirname, 'src'),
    hot: true
  }
}
