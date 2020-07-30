const webpackMerge = require("webpack-merge");
const baseConfig = require("./index.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
	return webpackMerge.merge(baseConfig(env, argv), {
		mode: "development",
		entry: {
			main: "./src/app.js",
		},
		output: {
			publicPath: "/",
			filename: "build.js",
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: "Benson",
				template: "./src/index.html",
				filename: "index.html",
			}),
		],
		devtool: "cheap-module-eval-source-map",
		devServer: {
			host: "localhost",
			port: "9000",
			open: false,
			compress: true, // 开起 gzip 压缩
			inline: true,
			hot: true,
			historyApiFallback: true, // browserHistory路由
		},
	});
};
