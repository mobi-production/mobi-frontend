/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('../ui/tailwind.config'),
  content: [
    '../../apps/academy/**/*.{js,ts,jsx,tsx}',
    '../../apps/lms/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C892',
        secondary: '#00B588',
        'green-gray': '#F1FBF8',
        green: '#195040',
        black: '#191919',
        'gray-1': '#545454',
        'gray-2': '#777777',
        'gray-3': '#999999',
        'gray-4': '#dddddd',
        'gray-5': '#F3F3F3',
        'gray-6': '#F9F9F9',
        red: '#F03838'
      },
      fontSize: {
        'text-heading-1': '64px',
        'text-heading-2': '48px',
        'text-heading-3': '36px',
        'text-title-1': '24px',
        'text-title-2': '18px',
        'text-body-1': '16px',
        'text-body-2': '14px',
        'text-body-3': '12px'
      }
    }
  },
  plugins: []
}
