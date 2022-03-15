const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackReaddir = require('./webpack.readdir');
const htmlFiles = webpackReaddir.getHtmlFiles();

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',
        module:
        {
            rules:
            [
                // HTML
                {
                    test: /\.html$/,
                    use: {
                        loader: "html-loader",
                        options: {
                            minimize: false,
                            sources: false
                        }
                    }
                },
                //SCSS
                {
                    test: /\.scss$/,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ]
                },
            ]
        },
        plugins: htmlFiles.concat([
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, '../src/assets'), to: '../assets' }
                ]
            }),
            new MiniCSSExtractPlugin({
                filename: '../css/[name].css',
            }),
            new CleanWebpackPlugin()
        ])
    }
)
