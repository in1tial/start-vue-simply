const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueTemplateCompiler = require("vue-loader/lib/plugin");

const config = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash:6].js',
    },
    resolve: {
        alias: {
            "@": path.resolve( 'src' ),
            "vue": "vue/dist/vue.esm.js",
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.js/,
                use: "babel-loader",
            },
            {
                test: /\.css/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.scss/,
                use: [
                    "sass-loader",
                    "vue-style-loader",
                    "css-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
        new VueTemplateCompiler(),
    ],
    devServer: {
        port: 9000,
        host: "0.0.0.0",
    }
}

module.exports = config;