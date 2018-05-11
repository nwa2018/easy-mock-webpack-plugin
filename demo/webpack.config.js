const path = require('path')
const EasyMockWebpackPlugin = require('easy-mock-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    port: 3004,
    inline: true,
    quiet: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new EasyMockWebpackPlugin({
      path: path.join(__dirname, './mock.config.js')
    })
  ]
}
