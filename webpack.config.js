var path = require('path')

const jsxRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ['@babel/env'] },
}

module.exports = {
  entry: './src/index.js',
  mode: 'developments',
  module: {
    rules: [jsxRule],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-amo.bundle.js',
  },
}
