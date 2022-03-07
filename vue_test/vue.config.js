//配置参考以下链接
//https://cli.vuejs.org/zh/config/#lintonsave
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false,//关闭语法检查

    //   //开启代理服务器(只能配置一个)————方式一
    //   devServer: {
    //       proxy: 'http://localhost:5000'
    //   },

    //开启代理服务器————方式二
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/atguigu': '' },
                ws: true,//用于支持websocket
                changeOrigin: true//用于控制请求头中的host值，服务器什么端口，代理服务器什么端口欺骗
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/demo': '' },
                ws: true,//用于支持websocket
                changeOrigin: true//用于控制请求头中的host值，服务器什么端口，代理服务器什么端口欺骗
            },
        },
    }
}