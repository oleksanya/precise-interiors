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
        accent: '#FFA500',
        accentHover:'#FFBB00',   // Orange (accent)
        light: '#F5F5F5',     // Light grey
        dark: '#9F9F9F',
        lightDanger: '#f8d7da',
        darkRed: '#721c24',
        lightRed: '#f5c6cb',
        greyBlue: '#7A92A8'

      },
      boxShadow: {
        'blue-shadow': '0 4px 10px 0 rgba(56, 111, 164, 0.4)',
      },
      backgroundImage: {
        'home-background': "url('/ceiling.png')",
        'join-team-background': "url('/team_background.jpg')",
        'who-we-are-background': "url('/section_2-bg.jpg')",
        'custom-gradient': 'linear-gradient(90deg, #FFA500 0%, rgba(56, 111, 164, 0.7) 60%, #FFA500 100%)',
        'multi-step-gradient': 'linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0%, #386FA4 50%, #133C55 100%)',
        'faded-dark-blue': 'linear-gradient(90deg, rgba(19, 60, 85, 0.1) 0%, #FFFFFF 100%)',
        'soft-gradient': 'linear-gradient(0deg, rgba(245, 245, 245, 0.05) 0%, rgba(255, 255, 255, 0.2) 22%, rgba(245, 245, 245, 0.7) 43%, rgba(245, 245, 245, 0.8) 80%, rgba(245, 245, 245, 1) 95%)',
        'faded-blue': 'linear-gradient(90deg, rgba(19,60,85,0.321187850140056) 0%, rgba(19,60,85,0.7637648809523809) 44%, rgba(255,255,255,1) 100%)',
        'our-expertise-linear': 'linear-gradient(90deg, rgba(19,60,85,0.17833070728291311) 0%, rgba(19,60,85,0.17) 48%, rgba(255,255,255,1) 100%)',
        'mobile-dark-blue': 'linear-gradient(90deg, rgba(19,60,85,0.6208858543417367) 0%, rgba(255,255,255,1) 100%)',
      },
    },
  },
  plugins: [],
}

