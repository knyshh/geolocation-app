const webpack = require('webpack');

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: './public/js/',
        filename: 'client.min.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}