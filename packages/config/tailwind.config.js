/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('../ui/tailwind.config'),
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      mobile: {
        max: '479px'
      },
      mobileAndTablet: {
        min: '480px',
        max: '767px'
      },
      tablet: {
        min: '768px',
        max: '1023px'
      },
      tabletAndLaptop: {
        min: '1024px',
        max: '1279px'
      },
      desktop: {
        min: '1280px'
      }
    },
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
        'landing-card-background-gradient-green':
          'linear-gradient(90deg, #1CD8D2 0%, #93EDC7 100%)',
        'landing-card-background-gradient-purple':
          'linear-gradient(90deg, #439CFB 0%, #F187FB 100%)',
        'landing-card-background-gradient-orange':
          'linear-gradient(90deg, #F9C58D 0%, #F492F0 100%)',
        'landing-card-background-gradient-red': 'linear-gradient(90deg, #FF5858 0%, #FA9372 100%)',
        'landing-card-background-gradient-blue': 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
        'landing-card-background-gradient-lavender':
          'linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slider: {
          '0%': {
            transform: 'translateY(0px)'
          },
          '100%': {
            transform: 'translateY(100px)'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'vertical-slider': 'slider 3s linear infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
