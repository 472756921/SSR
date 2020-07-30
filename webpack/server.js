const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	target: "node",
	entry: {
		main: "./server/index.js",
	},
	output: {
		publicPath: "./",
		filename: "[name].js",
		path: path.resolve(__dirname, "../server/dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [new CleanWebpackPlugin()],
};
