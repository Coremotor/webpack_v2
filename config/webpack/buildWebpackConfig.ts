import webpack from "webpack";

import { buildDevServer } from "config/webpack/buildDevServer";
import { buildLoaders } from "config/webpack/buildLoaders";
import { buildPlugins } from "config/webpack/buildPlugins";
import { buildResolvers } from "config/webpack/buildResolvers";
import { BuildOptions } from "config/webpack/types";

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
  };
}
