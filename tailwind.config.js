module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'system-blue': 'rgb(15,123,255)',
        'system-blue-light': 'rgb(217,234,255)' ,
        'On-Surface-Variant': 'rgba(179, 179, 179, 1)',
        'input': 'rgb(155,155,155)'
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#ffffff',
        'secondery-bg': 'rgb(249,249,249)',
        'system-blue-bg': 'rgb(15,123,255)' ,
        'system-blue-light-bg': 'rgb(217,234,255)' ,
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'input-bg': 'rgb(241,241,241)'

      },
      theme: {
        extend: {
          zIndex: {
            '100': '100',
          }
        }
      },
    },
  },
  plugins: [],
};