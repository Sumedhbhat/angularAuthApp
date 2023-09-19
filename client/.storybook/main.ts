import type { StorybookConfig } from '@storybook/angular';
import { resolve } from 'path';

const core = '../node_modules/bootstrap';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    config?.module?.rules?.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: resolve(__dirname, `${core}/dist/css`),
    });
    return config;
  },
};
export default config;
