import type { StorybookConfig } from '@storybook/react-vite'

import { join, dirname, resolve } from 'path'

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/**/*.@(js|jsx|mjs|ts|tsx)'],
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
  async viteFinal(config) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: 'ui',
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
