const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
});

module.exports = {  
    context: path.resolve(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.resolve(__dirname, 'built'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                plugins: ["transform-react-jsx"],
                presets: ['env']
            },
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })          
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "eval",
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        }),
        extractSass
    ],
    watch: true
};