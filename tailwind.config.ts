import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1/5': '1fr 5fr',
      },
      rotate: {
        135: '135deg',
      },
      width: {
        '5/7': '70%',
      },
      height: {
        sm: '1.5px',
        25: '6.5rem',
      },
      spacing: {
        18: '4.5rem',
        42: '172px',
        70: '17.5erm',
        68: '14erm',
        83: '22rem',
        26: '6.75rem',
        62: '15.5rem',
        69: '17.3rem',
        74: '18.2rem',
      },

      inset: {
        31: '31%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        base: '#141516',
        light: '#f9f9f9',
        heading: '#1a1c1d',
        outline: 'c2c2c2',
      },
    },
    fontFamily: {
      body: ['Roboto,Helvetica,Arial,sans-serif, times-new-roman'],
      nutino: ['Nunito Sans', 'sans-serif'],
      inter: ['Inter'],
    },

    important: true,

    minWidth: {
      0: '0',
      '2/5': '40%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      992: '992px',
    },
  },
  plugins: [],
}
export default config
