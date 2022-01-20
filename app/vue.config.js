module.exports = {
    productionSourceMap:false,
    // 关闭ESLINT校验工具
    lintOnSave: false,
    //代理跨域
    //凡是带有/api的请求，用下面的地址请求
    devServer:{
      proxy:{
        '/api':{
          target:'http://39.98.123.211',
          
        }
      }
    }
  };
  