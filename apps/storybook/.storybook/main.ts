import type { StorybookConfig } from '@storybook/react-vite'

import { join, dirname, resolve } from 'path'

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: '@repo/ui',
            replacement: resolve(__dirname, '../../../packages/ui/')
          }
        ]
      }
    }
  },

  docs: {
    autodocs: true
  }
}
export default config
