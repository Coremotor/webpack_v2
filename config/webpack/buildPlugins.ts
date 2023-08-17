// eslint-disable-next-line import/default
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types';

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
      ],
    }),

    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: 'css/[name].[chunkhash].chunk.css',
    }),

    new webpack.ProgressPlugin(),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
