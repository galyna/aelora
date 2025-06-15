import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#2F2F2F',
        clay: '#8C8375',
        background: '#FFFEF2',
        linen: '#F6F5E8',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        serif: ['var(--font-dm-serif)'],
      },
    },
  },
  plugins: [],
}

export default config 