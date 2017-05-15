const {resolve} = require('path')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const filename = '[name].js'

module.exports = {
  entry: {
    common: [
      'react', 'react-dom', 'react-redux', 'redux', 'redux-frr', 'immutable',
      'react-router-dom', 'react-router-redux'
    ],
    index: './src/client/index.js'
  },
  context: process.cwd(),
  output: {
    filename,
    chunkFilename: '[chunkhash].js',
    path: resolve(__dirname, './build'),
    publicPath: '//localhost:9998/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'syntax-dynamic-import',
            'transform-pug-to-react', 'transform-flow-strip-types'
          ]
        }
      }
    ]
  },
  resolve: {
    modules: [
      resolve(__dirname, './src/client'),
      resolve(__dirname, './src/server'),
      resolve(__dirname, './src/shared'),
      'node_modules'
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity,
      filename: filename
    }),
    new CommonsChunkPlugin({
      name: 'manifest',
      filename: filename
    })
  ],
  devtool: 'source-map'
}
