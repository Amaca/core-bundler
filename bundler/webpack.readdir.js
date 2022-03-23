
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getHtmlFiles = (settings) => {
    let htmlFiles = [];
    const pagesDir = path.resolve(__dirname, settings.pagesDirPath);
    fs.readdirSync(pagesDir).forEach(page => {
        if (page.indexOf('.html') !== -1) {
            htmlFiles.push(
                new HtmlWebpackPlugin({
                    filename: settings.fileNamePath + page,
                    template: path.resolve(__dirname, settings.templatePath + page),
                    minify: settings.minify
                })
            );
        }
    })
    return htmlFiles;
}

exports.getHtmlFiles = getHtmlFiles;