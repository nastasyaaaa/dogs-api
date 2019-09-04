const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/js/main",
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader : MiniCssExtract.loader
                    },
                    {
                        loader : "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtract({
            filename: "bundle.css",
        })
    ],
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000,
        publicPath: '/dist/',
        watchContentBase: true // for live reloading
    },

    watch: true
}