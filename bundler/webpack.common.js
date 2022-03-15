const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/js/main.js'),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../dist/js')
    },
    devtool: 'source-map',
    plugins: [
        new MiniCSSExtractPlugin()
    ],

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ],
                generator: {
                    filename: '../assets/css/[name][ext]'
                }
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: '../assets/img/[name][ext]'
                }
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: '../assets/font/[name][ext]'
                }
            },
        ]
    }
}