'use strict';

//本配置仅用于webstorm识别@路径

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = {
    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
};
