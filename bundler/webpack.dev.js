const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const ip = require('internal-ip')
const portFinderSync = require('portfinder-sync')
const webpackReaddir = require('./webpack.readdir');
const htmlFiles = webpackReaddir.getHtmlFiles();

const infoColor = (_message) =>
{
    return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`
}

module.exports = merge(
    commonConfiguration,
    {
        stats: 'errors-warnings',
        mode: 'development',
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
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
            ]
        },
        plugins: htmlFiles.concat([

        ]),
        devServer:
        {
            host: 'local-ip',
            port: portFinderSync.getPort(8080),
            open: true,
            https: false,
            allowedHosts: 'all',
            hot: false,
            watchFiles: ['src/**'],
            static:
            {
                watch: true,
                directory: path.join(__dirname, '../src')
            },
            client:
            {
                logging: 'none',
                overlay: true,
                progress: false
            },
            setupMiddlewares: function (middlewares, devServer) {
                const port = devServer.options.port
                const https = devServer.options.https ? 's' : ''
                const localIp = ip.v4.sync()
                const domain1 = `http${https}://${localIp}:${port}`
                const domain2 = `http${https}://localhost:${port}`

                console.log(`Project running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`)

                return middlewares
            }
        }
    }
)
