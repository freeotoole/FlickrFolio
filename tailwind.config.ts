import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: colors.stone,
      secondary: colors.teal,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 'semibold',
              lineHeight: 1.4,
            },
            h2: {
              fontWeight: 'semibold',
              marginBottom: '1rem',
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontWeight: 'semibold',
              lineHeight: 1.4,
            },
            h2: {
              fontWeight: 'semibold',
              marginBottom: '1rem',
              // fontSize: '2rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@onthetools/tailwind-text-clamp')({
      utilityClassName: 'clamp-text',
    }),
    require('@tailwindcss/typography'),
  ],
}
export default config
