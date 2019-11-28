const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')


module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    //配置开发静态http服务
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true
    },
    module: {
        //配置各种用于源文件编译加载的loader
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }, 
})