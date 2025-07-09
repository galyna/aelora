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
        olive: '#7a8648',
        oliveDark: '#55602c',
        oliveLight: '#f0f0e4',
        // Allow opacity modifiers like bg-overlay/20 by using <alpha-value>
        overlay: 'rgb(177 73 18 / <alpha-value>)',
      },
        fontFamily: {
          sans: ['var(--font-sans)', 'sans-serif'],
          serif: ['var(--font-serif)', 'serif'],
        },
    },
  },
  plugins: [],
}

export default config 