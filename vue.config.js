module.exports = {
    devServer: {
        proxy: {
            // "/api": {
            //     target: "//yourong.yourongdaijian.com",   
            //     ws: true,    
            //     changeOrigin: true,    
            //     pathRewrite: {
            //         "^/api": "/"          
            //     }
            // },
            "/api": {
                target: "http://devdb.hunlihu.com/h5create",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/apiDev": "",
                }
            },
            // "/api2": {
            //     target: "http://devdb.hunlihu.com/hlnh5/ly",   
            //     ws: true,    
            //     changeOrigin: true,    
            //     pathRewrite: {
            //         "^/api2": "",          
            //     }
            // },
        },
    },
    outputDir: 'official_site',
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    // If you are using less-loader@5 please spread the lessOptions to options directly
                    modifyVars: {
                        'primary-color': '#a1488e',
                        'link-color': '#a1488e',
                        'border-radius-base': '2px',
                        // @primary-color: #1890ff; // 全局主色
                        // @link-color: #1890ff; // 链接色
                        // @success-color: #52c41a; // 成功色
                        // @warning-color: #faad14; // 警告色
                        // @error-color: #f5222d; // 错误色
                        // @font-size - base: 14px; // 主字号
                        // @heading-color: rgba(0, 0, 0, 0.85); // 标题色
                        // @text-color: rgba(0, 0, 0, 0.65); // 主文本色
                        // @text-color - secondary: rgba(0, 0, 0, 0.45); // 次文本色
                        // @disabled-color: rgba(0, 0, 0, 0.25); // 失效色
                        // @border-radius - base: 4px; // 组件/浮层圆角
                        // @border-color - base: #d9d9d9; // 边框色
                        // @box-shadow - base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
}