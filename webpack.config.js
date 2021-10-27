const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge: webpackMerge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/presets/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 8192,
                },
              },
            ],
          },
        ],
      },
      output: {
        filename: "bundle.js",
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
