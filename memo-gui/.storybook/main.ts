import type { StorybookConfig } from "@storybook/nextjs";   

import path from "path";
import * as tsConfig from "../tsconfig.json";


const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ['../public'],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: any) => {
    const { paths } = tsConfig.compilerOptions;
    const rootDir = path.resolve(__dirname, "..");
    config.resolve.alias = {
      ...Object.entries(paths)
        .reduce((acc, [key, value]) => {
          acc[key.slice(0,-2)] = path.resolve(rootDir, value[0].slice(0,-1));
          return acc;
        }, {}),
        ...config.resolve.alias
    }
    return config
  },
};
export default config;
