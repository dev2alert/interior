const path = require("path");
const mode = process.env.NODE_ENV;

module.exports = {
    mode,
    devtool: mode === "development" ? "source-map" : undefined,
    entry: path.join(__dirname, "./src/index.tsx"),
    output: {
        path: path.join(__dirname, "./dist/scripts"),
        filename: "index.js",
        chunkFilename: "[chunkhash].chunk.js",
        publicPath: "/scripts/",
        assetModuleFilename: "../assets/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                loader: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    devServer: {
        port: 80,
        static: {
            directory: path.join(__dirname, "dist")
        },
        hot: false,
        historyApiFallback: true
    }
};