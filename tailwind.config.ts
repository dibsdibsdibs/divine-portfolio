import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'white': '#EBE8E7',
      'pink': '#EA7186',
      'yellow': '#F2C76E',
      'violet': '#7A77B9',
      'lilac': '#BD9DEA',
    },
    fontFamily: {
      'raleway': ['Raleway'],
      'mango': ['Mango'],
    }
  },
  plugins: [],
}
export default config
