'use strict';
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = {
    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     */
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,

    devServer: {
        port: 9527,
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: '简Down',
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            libraryExport: 'default'
        }

    },
};
