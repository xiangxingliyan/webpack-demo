const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'), //打包入口文件
    output: {
        filename: './js/[name].js?[hash]',
        path: path.resolve(__dirname, 'dist/'),
    }, //打包出口文件,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '管理',
            template: path.resolve(__dirname, './src/index.html')
        }),
    ]
}