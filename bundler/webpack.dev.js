const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const portFinderSync = require('portfinder-sync')
const webpackReaddir = require('./webpack.readdir');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    const devModuleSettings = {
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
                ]
            },

            //SCSS
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
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
    };

    const devPluginsSettings = [
        new MiniCSSExtractPlugin()
    ];

    const devServerSettings = {
        host: 'local-ip',
        port: portFinderSync.getPort(8080),
        open: true,
        https: false,
        allowedHosts: 'all',
        hot: false,
        watchFiles: ['src/**'],
        static: {
            watch: true,
            directory: path.join(__dirname, '../src')
        },
        client: {
            logging: 'none',
            overlay: true,
            progress: false
        }
    }

    const htmlFiles = webpackReaddir.getHtmlFiles({
        input: '../src/',
        output: '',
        data: '../src/data.json',
        minify: false
    });

    const devConfiguration = {
        stats: 'errors-only',
        mode: 'development',
        module: devModuleSettings,
        plugins: htmlFiles.concat(devPluginsSettings),
        devServer: devServerSettings,
        resolve: {
            fallback: {
                "fs": false
            },
        }
    };

    return merge(commonConfiguration, devConfiguration);
}