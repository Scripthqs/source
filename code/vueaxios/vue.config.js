
module.exports = {
    //方式1.开启代理服务器，写真正访问服务器的端口
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // }
    //这种方法只能保证本身服务器没有了走代理，不够灵活，而且只能配置一个服务器


    //方式2.不能同时用
    devServer: {
        proxy: {
          '/api': {//想走代理，就在请求前面加/api
            target: 'http://localhost:5000',
            pathRewrite:{'^/api':''},//保证代理服务器转发到真正服务器的地址不带/api
            // ws: true,//用于支持websocket
            // changeOrigin: true//用于控制请求头中的host值
          },
          '/test': {//想走代理，就在请求前面加/api
            target: 'http://localhost:5001',
            pathRewrite:{'^/test':''},//保证代理服务器转发到真正服务器的地址不带/api
            // ws: true,//用于支持websocket
            // changeOrigin: true//用于控制请求头中的host值
          },
          '/abc': {//想走代理，就在请求前面加/api
            target: 'https://autumnfish.cn/',
            pathRewrite:{'^/abc':''},//保证代理服务器转发到真正服务器的地址不带/api
            // ws: true,//用于支持websocket
            // changeOrigin: true//用于控制请求头中的host值
          },
        }
      }
  }