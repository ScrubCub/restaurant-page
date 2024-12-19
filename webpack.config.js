const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/entry.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/practice.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/practice.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
                type: "asset/resource",
            }
        ],
    },
};