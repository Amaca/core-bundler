const path = require('path')
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');

module.exports = {
    entry: path.resolve(__dirname, '../src/app/app.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/js'),
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
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
            
             //SVG
             {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: SvgSpriteHtmlWebpackPlugin.getLoader()
              },
        ]
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