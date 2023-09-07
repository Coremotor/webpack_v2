// eslint-disable-next-line import/default
import CopyPlugin from "copy-webpack-plugin";
import Dotenv from "dotenv-webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";

import { BuildOptions } from "./types";

export function buildPlugins(
  options: BuildOptions,
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options;
  const plugins = [
    new ForkTsCheckerWebpackPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: paths.copyLocalesFrom,
          to: paths.copyLocalesTo,
        },
        {
          from: path.resolve("public/assets/logo-mini.svg"),
          to: path.resolve("build/assets/logo-mini.svg"),
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash].css",
      chunkFilename: "css/[name].[chunkhash].chunk.css",
    }),

    new Dotenv({
      path: `${options.paths.root}/.env.${options.mode}`,
    }),

    new webpack.ProgressPlugin(),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
