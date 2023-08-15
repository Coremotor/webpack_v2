import webpack from 'webpack';
import {buildWebpackConfig} from "./buildWebpackConfig";
import {BuildMode, BuildPaths} from "./types";
import path from "path";
import * as process from "process";

const paths: BuildPaths = {
  entry: path.resolve('src', 'index.tsx'),
  html: path.resolve('public', 'index.html'),
  favicon: path.resolve('public', 'favicon.ico'),
  build: path.resolve('build'),
  src: path.resolve('src')
}

const mode = (process.env.MODE || BuildMode.Development) as BuildMode
const isDev = mode === BuildMode.Development
const port = process.env.PORT ? +process.env.PORT : 5000

const config: webpack.Configuration = buildWebpackConfig(
  {
    mode,
    paths,
    isDev,
    port
  }
)

export default config;
