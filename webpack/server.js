const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	target: "node",
	entry: {
		main: "./src/app_server.js",
	},
	output: {
		libraryTarget: "commonjs2",
		publicPath: "./",
		filename: "server.js",
		path: path.resolve(__dirname, "../dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: "ignore-loader",
			},
		],
	},
	plugins: [new CleanWebpackPlugin()],
};
