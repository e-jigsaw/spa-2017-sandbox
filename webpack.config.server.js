const {resolve} = require('path')
const client = require('./webpack.config.client.js')

module.exports = {
  entry: {
    index: './src/server/index.js'
  },
  context: client.context,
  output: {
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    path: resolve(__dirname, './lib'),
    publicPath: '/'
  },
  module: client.module,
  resolve: client.resolve,
  target: 'node'
}
