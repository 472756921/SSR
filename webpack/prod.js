const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./index.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return webpackMerge.merge(baseConfig(env, argv), {
    mode: "production",
    entry: {
      main: "./src/app.js",
    },
    output: {
      publicPath: "./",
      filename: "[name].js",
      path: path.resolve(__dirname, "../server/dist"),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Benson",
        template: "./index.ejs",
        filename: "index.html",
      }),
    ],
    optimization: {
      usedExports: true, //清除无用JS
    },
  });
};
