const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    //入口：可以是字符串/数组/对象，这里只有一个入口，所以写一个字符串
    entry: './src/main.js',
    //出口：通常是一个对象，里面至少包含2个重要属性，path路径和filename文件名
    output: {
        // path: path.resolve(__dirname,'dist'),
        path: path.join(__dirname,'dist'),//path通常是一个绝对路径
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
            rules: [
              {
                //正则表达式
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 13000,
                      name:'img/[name].[hash:8].[ext]'
                    }
                  }
                ]
              },
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.vue$/,
                use: ['vue-loader']
              }
            ]
    }, 
    resolve:{
      //导入文件时，可以省略后缀
      extensions: ['.js','.css','.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugin: [
      new webpack.BannerPlugin('版权声明哈哈哈'),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new UglifyJsPlugin()
    ],
    devServer: {
      contentBase: './dist',
      inline: true
    }
}