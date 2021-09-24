const path = require("path");
const mode = process.env.NODE_ENV;

module.exports = {
    mode,
    devtool: mode === "development" ? "source-map" : undefined,
    entry: path.join(__dirname, "./src/index.tsx"),
    output: {
        path: path.join(__dirname, "./dist/assets"),
        filename: "index.js",
        chunkFilename: "[chunkhash].chunk.js",
        assetModuleFilename: "[hash][ext][query]",
        publicPath: "/assets/"
    },
    performance: {
        maxEntrypointSize: 800000,
        maxAssetSize: 800000
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
        hot: true,
        historyApiFallback: true
    }
};