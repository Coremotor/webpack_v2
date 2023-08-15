import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const typescript = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const css = {
    test: /\.css$/i,
    use: [
      { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' }
    ]
  }

  const sass = {
    test: /\.s[ac]ss$/i,
    use: [
      { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'sass-loader' }
    ]
  }

  const assets = {
    test: /\.(jpe?g|png|woff|woff2)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/[hash][ext][query]'
    }
  }

  const svg = {
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  }

  return [
    typescript,
    css,
    sass,
    assets,
    svg
  ]
}
