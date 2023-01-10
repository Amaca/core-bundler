const path = require('path')
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
    entry: path.resolve(__dirname, '../src/app/app.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../docs/js'),
        clean: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'esbuild-loader',
                options: {
                    target: 'es2015'
                }
            },
            //SVG
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: SvgSpriteHtmlWebpackPlugin.getLoader()
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
			new ESBuildMinifyPlugin({
                target: 'es2015',
                css: true
            })
		],
    },
    plugins: [
        new SvgSpriteHtmlWebpackPlugin({
            append: true,
            includeFiles: [
                'src/assets/svg/*.svg',
            ],
        })
    ]
}