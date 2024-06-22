/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('../ui/tailwind.config'),
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
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
        red: '#F03838',
        'glass-stroke': 'rgba(255, 255, 255, 0.97)'
      },
      fontSize: {
        'text-heading-1': [
          '64px',
          {
            fontcolor: '#212529',
            fontWeight: 700,
            lineHeight: '120%'
          }
        ],
        'text-heading-2': [
          '48px',
          {
            fontcolor: '#212529',
            fontWeight: 700,
            lineHeight: '120%'
          }
        ],
        'text-heading-3': [
          '36px',
          {
            fontcolor: '#212529',
            fontWeight: 700,
            lineHeight: '120%'
          }
        ],
        'text-title-1': [
          '24px',
          {
            fontcolor: '#212529',
            fontWeight: 600,
            lineHeight: '120%'
          }
        ],
        'text-title-2': [
          '20px',
          {
            fontcolor: '#212529',
            fontWeight: 600,
            lineHeight: '120%'
          }
        ],
        'text-title-3': [
          '18px',
          {
            fontcolor: '#212529',
            fontWeight: 600,
            lineHeight: '120%'
          }
        ],
        'text-body-1': [
          '16px',
          {
            fontcolor: '#212529',
            fontWeight: 600,
            lineHeight: '120%'
          }
        ],
        'text-body-2': [
          '14px',
          {
            fontcolor: '#212529',
            fontWeight: 600,
            lineHeight: '120%'
          }
        ],
        'text-body-3': [
          '12px',
          {
            fontcolor: '#212529',
            fontWeight: 400,
            lineHeight: '120%'
          }
        ]
      },
      backgroundImage: {
        'apply-background-gradient':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.00) 44.95%, #FFF 81.3%)',
        'curriculum-background-gradient': 'linear-gradient(to bottom, #F1FBF8, #F9F9F9)',
        'curriculum-subject-background-gradient':
          'linear-gradient(15deg, #00C892 53.73%, #A5E9BC 129.63%)',
        'curriculum-contents-background-gradient':
          'radial-gradient(58.73% 58.73% at 50% 50%, rgba(0, 200, 146, 0.20) 0%, rgba(255, 255, 255, 0.00) 70%)'
      },
      keyframes: {
        stackBannerLoop: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '50.01%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        stackBannerSlideContinuous: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        stackBannerLoop: 'stackBannerLoop 66s linear infinite',
        stackBannerSlideContinuous: 'stackBannerSlideContinuous 66s linear infinite'
      }
    }
  },
  plugins: []
}
