export enum BuildMode {
  Production = "production",
  Development = "development",
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  favicon: string;
  root: string;
  copyLocalesFrom: string;
  copyLocalesTo: string;
  copyAssetsFrom: string;
  copyAssetsTo: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
