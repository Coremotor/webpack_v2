import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev} = options

  const typescript = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const css = {
    test: /\.css$/i,
    use: [
      {loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader},
      {loader: 'css-loader'},
    ],
  }

  const sass = {
    test: /\.s[ac]ss$/i,
    use: [
      {loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader},
      {loader: 'css-loader'},
      {loader: 'sass-loader'}
    ],
  }

  const assets = {
    test: /\.(jpe?g|png|woff2)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  }

  const svgUrl = {
    test: /\.svg$/i,
    type: 'asset',
    // *.svg?url
    resourceQuery: /url/,
  }

  const svg = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    // exclude react component if *.svg?url
    resourceQuery: {not: [/url/]},
    use: ['@svgr/webpack'],
  }


  return [
    typescript,
    css,
    sass,
    assets,
    svgUrl,
    svg
  ]
}
