const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: {
        "main":'./src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use:[
                    "html-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "/src/index.html",
            filename: "./index.html"
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

};