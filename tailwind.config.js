/** @type {import('tailwindcss').Config} */
import withMT  from "@material-tailwind/react/utils/withMT";
export default withMT(
  {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      container: {
        center: true,
      },
  
      extend: {
        colors: {
          sectionBG: '#1c2230',
          btnBG: '#096eba',
          btnBG2: '#8cdae4',
          footerBG: '#0c1525'
        },
  
        keyframes: {
          moveRight: {
            '0%': {
              transform: 'translateX(0px)',
            },
  
            '50%': {
              transform: 'translateX(10px)',
            },
            
            '100%': {
              transform: 'translateX(0px)',
            },
          },
        },
  
        animation: {
          moveRight: 'moveRight 1.5s ease-in-out infinite',
        },
  
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1400px',
        },
      },
    },
    plugins: [],
  }  
)