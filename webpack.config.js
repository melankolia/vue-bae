const path = require('path');

module.exports = {
    module: {
        rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              include: [path.resolve('src'), path.resolve('test'), path.resolve('node_modules/webpack-dev-server/client'),
                path.resolve('node_modules/vuex-persist/dist/esm/index.js')]
            },
        ]
    }
}