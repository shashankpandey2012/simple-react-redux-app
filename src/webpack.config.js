/**
 * Created by Shashank on 7/29/2017.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loader: `style-loader!css-loader!less`
            },
            {
                test: /\.styl$/,
                include: __dirname,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /[\/\\](node_modules|global)[\/\\].*\.s?css$/,
                loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap'
            },
            {
                test: /[\/\\]src[\/\\].*\.s?css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass'
                ]
            },
            {
                test: /\.png$/,
                loader: "file-loader"
            },
            {
                test: /\.json$/,
                loader: "file-loader"
            }
        ]
    },
    sassLoader: {
        data: '@import "styles/Theme.scss";',
        includePaths: [path.resolve(__dirname, './src/')]
    }
};