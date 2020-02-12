
module.exports = {
    // 部署包的路径
    publicPath: '/',
    // 部署包文件夹的名称
    outputDir: 'static',
    // 静态文件的文件夹名称
    assetsDir: 'static',
    // 指定index.html的输出路径
    indexPath: 'index.html',
    // 打包生成的静态资源文件名hash
    filenameHashing: false,
    // 保存时进行使用 eslint-loader 校验，检查错误会触发编译失败
    lintOnSave: true,
    // 是否运行时编译 vue 构建版本
    runtimeCompiler: false,
    // 打包去掉 .map 文件
    productionSourceMap: false,

    configureWebpack: {
        performance: {
            hints: 'warning',
        }
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#436BAF',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    },

    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: {
            '/api' : {
                target: 'http://localhost:80',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    }

}