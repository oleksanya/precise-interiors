/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#133C55',   // Most used color (dark blue)
        secondary: '#386FA4', // Blue
        info: '#59A5D8',      // Light blue
        accent: '#FFA500',    // Orange (accent)
        light: '#F5F5F5',     // Light grey
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #FFA500 0%, rgba(56, 111, 164, 0.7) 60%, #FFA500 100%)',
        'multi-step-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(52, 106, 156, 0.4) 44%, rgba(56, 111, 164, 0.9) 58%, rgba(37, 84, 123, 0.95) 70%, #133C55 81%)',
        'faded-dark-blue': 'linear-gradient(90deg, rgba(19, 60, 85, 0.1) 0%, #FFFFFF 100%)',
        'soft-gradient': 'linear-gradient(90deg, rgba(245, 245, 245, 0.05) 0%, rgba(255, 255, 255, 0.2) 22%, rgba(245, 245, 245, 0.7) 43%, rgba(245, 245, 245, 0.8) 80%, rgba(245, 245, 245, 1) 95%)',
        'faded-blue': 'linear-gradient(90deg, rgba(19, 60, 85, 0.4), rgba(19, 60, 85, 0))',
        
      },
    },
  },
  plugins: [],
}

