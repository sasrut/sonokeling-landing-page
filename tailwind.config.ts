import type { Config } from 'tailwindcss'

// Soft, pastel take on sonokeling (Indian rosewood): dusty rose-browns with sage as a quiet counterpoint.
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        sono: {
          50: '#FBF7F4', 100: '#F3E9E2', 200: '#E6D3C7', 300: '#D5B8A8', 400: '#BE9A8A',
          500: '#A37B6D', 600: '#85594F', 700: '#684640', 800: '#4B3430', 900: '#35241F',
        },
        sage: { 200: '#C3CEB6', 400: '#9DAE90', 600: '#6F8264' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
