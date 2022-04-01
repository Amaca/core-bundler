
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getHtmlFiles = (settings) => {
    let htmlFiles = [];
    let templateParameters = require(settings.data); 
    const pagesDir = path.resolve(__dirname, settings.input);
    fs.readdirSync(pagesDir).forEach(page => {
        if (page.indexOf('.html') !== -1) {
            htmlFiles.push(
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, settings.input + page), //input path
                    filename: settings.output + page, //output path
                    templateParameters: templateParameters, //import json data
                    minify: settings.minify
                })
            );
        }
    })
    return htmlFiles;
}

exports.getHtmlFiles = getHtmlFiles;