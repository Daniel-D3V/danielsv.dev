import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class", "[class~='dark']"],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-poppins)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary-light': '#fff',
        'primary-dark': '#030712',
      },
      colors: {
        'light-color': '#f9fafb',
        'dark-color': '#030712',
        'description-light': '#9ca3af',
        'primary': '#6d28d9'
      }
    },
  }
})
export default config
