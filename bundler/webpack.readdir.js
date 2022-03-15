
const path = require('path')
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getHtmlFiles = () => {
    let htmlFiles = [];
    const pagesDir = path.resolve(__dirname, '../src/');

    fs.readdirSync(pagesDir).forEach(page => {
        if (page.indexOf('.html') !== -1) {
            htmlFiles.push(
                new HtmlWebpackPlugin({
                    filename: page,
                    template: path.resolve(__dirname, '../src/' + page),
                    minify: false
                })
            );
        }
    })

    return htmlFiles;
}

exports.getHtmlFiles = getHtmlFiles;