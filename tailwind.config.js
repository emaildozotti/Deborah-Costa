/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-deep': '#1B3A4B',
        'amber-warm': '#C8883A',
        'ivory': '#F5F0E8',
        'sage': '#7A9E9F',
        'charcoal': '#2A2A2A',
        'offwhite': '#FAFAF8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        'h2': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.375rem, 2.5vw, 2rem)', { lineHeight: '1.3' }],
        'lead': ['clamp(1.125rem, 1.5vw, 1.375rem)', { lineHeight: '1.6' }],
      },
      borderRadius: {
        'btn': '4px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
