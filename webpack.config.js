const path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: ['babel-polyfill', './serverless_function.js'],
    output: {
        path: path.resolve('dist'),
        filename: 'serverless_lib.js',
        library: 'ServerlessTest',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    target: 'node',
    externals: [nodeExternals()]
}