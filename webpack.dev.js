const path = require('path');
const common = require('./webpack.common')
const {merge} = require("webpack-merge")


module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.(scss|sass)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",

                ]
            }
        ]
    }
});