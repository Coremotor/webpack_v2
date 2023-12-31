import { ResolveOptions } from "webpack";

import { BuildOptions } from "./types";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths } = options;
  return {
    modules: [paths.src, "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  };
}
