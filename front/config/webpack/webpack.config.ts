import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./buildWebpackConfig";
import { BuildMode, BuildPaths } from "./types";

const paths: BuildPaths = {
  entry: path.resolve("src", "index.tsx"),
  html: path.resolve("public", "index.html"),
  favicon: path.resolve("public", "favicon.ico"),
  build: path.resolve("build"),
  src: path.resolve("src"),
  root: path.resolve(),
  copyLocalesFrom: path.resolve("public/locales"),
  copyLocalesTo: path.resolve("build/locales"),
  copyAssetsFrom: path.resolve("public/assets"),
  copyAssetsTo: path.resolve("build/assets"),
};

const mode = (process.env.NODE_ENV || BuildMode.Development) as BuildMode;
const isDev = mode === BuildMode.Development;
const port = 3000;

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port,
});

export default config;
