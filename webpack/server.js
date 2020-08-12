const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  entry: {
    main: "./src/server_app.js",
  },
  output: {
    libraryTarget: "commonjs2",
    publicPath: "./",
    filename: "server.js",
    path: path.resolve(__dirname, "../dist_server"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
