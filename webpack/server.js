const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
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
				options: {
					presets: [
						"react",
						"stage-0",
						[
							"env",
							{
								targets: {
									browsers: ["last 2 versions"],
								},
							},
						],
					],
				},
			},
		],
	},
	plugins: [new CleanWebpackPlugin()],
};
