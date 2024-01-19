import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.gptsapp.io/store/",
  match: "https://www.gptsapp.io/gpts/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
