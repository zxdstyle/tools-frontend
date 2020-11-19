const path = require("path")

module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    },
    pluginOptions: {
        // 第三方插件配置
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/css/components/colors.less")] // less所在文件路径
        }
    }
}
