const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.esbook.cn/', //接口域名
                changeOrigin: true, //是否跨域
                ws: true, //是否代理 websockets
                secure: false, //是否https接口
                pathRewrite: { //路径重置
                    '^/api': ''
                }
            }
        }
    }

})