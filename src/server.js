/**
 * Created by Shashank on 7/29/2017.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(process.env.PORT || 3000, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at localhost:${process.env.PORT || 3000}`);
});