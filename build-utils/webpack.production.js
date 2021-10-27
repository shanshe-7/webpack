const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  output: {
    filename: "bundle.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
