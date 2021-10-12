const path = require('path');
const webpack = require('webpack');

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
                'src': path.join(__dirname, 'src'),
            }
        },
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 6
            })
        ]
    },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    }
};

