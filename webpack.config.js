const path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.jsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "web", //changed from node
    devServer: {
        port: "9500",
        contentBase: ["./public"],
        open: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js",".jsx",".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}