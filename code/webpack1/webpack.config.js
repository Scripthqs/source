const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  plugins: [htmlPlugin, cleanPlugin],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'], },

      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=8192&outputPath=img' },

      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },

    ]
  },
  mode: 'development',
  // devtool: 'eval-source-map',
  devtool: 'nosources-source-map',
  devServer: {
    open: true,//初次打包，自动打开浏览器
    host: '127.0.0.1',
    port: 9999
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],//配置这个参数后，导入文件时，可以省略后缀
    alias: {
      // '@': path.join(__dirname, './src/')//用@符号代替src文件夹
      '@': path.resolve('src')//用@符号代替src文件夹
    }
  }
}
