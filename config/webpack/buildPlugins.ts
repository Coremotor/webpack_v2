import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options
  const plugins = [
    new ForkTsCheckerWebpackPlugin(),

    new HtmlWebpackPlugin(
      {
        template: paths.html,
        favicon: paths.favicon
      }
    ),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: 'css/[name].[chunkhash].chunk.css'
    }),

    new webpack.ProgressPlugin()
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins
}
