const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    resolve: {
      extensions: [".js", ".jsx", "less", "css"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" },
        },
        {
          /**
           * 第三方组件的css.
           */
          test: /\.(css|less)$/,
          exclude: /src/,
          use: ["style-loader", "css-loader"],
        },
        {
          /**
           * 组件的css, lcss.
           */
          test: /\.(css|less)$/,
          exclude: /node_modules/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true, // 开启模块化
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10240,
                name: "./assets/[hash]_[name].[ext]",
                esModule: false,
              },
            },
          ],
        },
      ],
    },
  };
};
