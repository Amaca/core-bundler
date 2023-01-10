const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const webpackReaddir = require('./webpack.readdir');

module.exports = (en, argv) => {
    
    const prodModulesettings = {
        rules:
            [
            // HTML
            {
                test: /\.html$/,
                use: {
                    loader: 'simple-nunjucks-loader'
                }
            },
            
            // CSS
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    { 
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ],
            },
            
            //SCSS
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    { 
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'sass-loader',
                ]
            },
        ]
    }

    const prodPluginsSettings = [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../src/assets'), to: '../assets' }
            ]
        }),
        new MiniCSSExtractPlugin({
            filename: '../css/[name].css',
        })
    ]

    const prodStatsSettings = 'normal';
    const devStatsSettings = {
        logging: 'error',
        builtAt: true,
    }

    const htmlFiles = webpackReaddir.getHtmlFiles({
        input: '../src/',
        output: '../',
        data: '../src/data.json',
        minify: false
    });

    const prodConfiguration = {   
        stats: argv.mode === 'development' ? devStatsSettings : prodStatsSettings,
        mode: argv.mode,
        module: prodModulesettings,
        plugins: htmlFiles.concat(prodPluginsSettings)
    }

    return merge(commonConfiguration, prodConfiguration);
} 

