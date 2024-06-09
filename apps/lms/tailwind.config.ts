import { colors, fontSize } from '@repo/design'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize
    }
  },
  plugins: []
}
export default config
