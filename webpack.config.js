const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    allChunks: true
});

module.exports = {
    entry: ["babel-polyfill", './src/client/index'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    query: {
                        localIdentName: '[hash:8]',
                        modules: true
                    }
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        },
        {
            test: /\.(jpg|png)$/,
            use: [{
                loader: 'url-loader',
                options: { limit: 8192 }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: "eval",
    plugins: [
        extractSass,
        new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ],
    watch: true
};