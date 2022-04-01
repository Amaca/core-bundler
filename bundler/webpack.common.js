const path = require('path')

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
            }
        ]
    }
}