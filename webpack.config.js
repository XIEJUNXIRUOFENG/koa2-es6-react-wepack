const path = require('path')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: `${__dirname}/src/containers/main.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  module: {
    loaders:[
    {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        query: {presets: ['es2015','react']}
    }
    ]
   },
}
