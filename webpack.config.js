const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].[hash:8].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"],
            },
        ]
    },
    devServer: {
        compress: false,
        open: true,
        port: 3000,
        hot: true,
    }
}