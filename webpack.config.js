const path = require('path')
const webpack = require('webpack')
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server', //HRM更新时刷新整个页面，如果是only-dev-server是手动刷新
    `${__dirname}/src/containers/main.js`,
    ],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
    publicPath: '/build/'
    // webpack-dev-server服务上的文件是相对publicPath这个路径的，用于设置热加载的服务器
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updatesnew ExtractTextPlugin('[name].css'),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
      output: {
          comments: false,
      },
    }),
    new webpack.DefinePlugin({
      "process.env": { 
          NODE_ENV: JSON.stringify("production") 
        }
    })
  ],
  resolve: {
    // 定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
    extensions: ['.js', '.jsx', '.css', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react']
          }
        }
      },
      {test: /\.(css|less)$/, loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])},
    ]
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    contentBase: path.resolve(__dirname, 'build')
  }
}