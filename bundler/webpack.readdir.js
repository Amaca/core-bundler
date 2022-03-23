
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getHtmlFiles = (settings) => {
    let htmlFiles = [];
    const pagesDir = path.resolve(__dirname, settings.input);
    fs.readdirSync(pagesDir).forEach(page => {
        if (page.indexOf('.html') !== -1) {
            htmlFiles.push(
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, settings.input + page),
                    filename: settings.output + page,
                    minify: settings.minify
                })
            );
        }
    })
    return htmlFiles;
}

exports.getHtmlFiles = getHtmlFiles;