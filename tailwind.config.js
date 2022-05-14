const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans], //Fuente inter
      },
      width: {
        '85vw': '85vw', //En ancho del contenedor
        '350px': '350px', //El ancho del menú
        '220px': '220px', //El ancho del logo
        '210px': '210px', //El ancho del logo en el footer para escritorio y móviles
        '170px': '170px', //El ancho del logo en el footer para tablets
      },
      fontSize: { //Distintos tamaños de letra
        '40px': '40px', //Tamaño del icono de hamburguesa ☰
        'h2': '1.6rem', //Tamaño de la etiqueta h2
        'h3': '1.4rem',
        'h4': '1.1rem',
      },
      boxShadow: {
        'sm': '0 2px 5px rgb(20, 20, 20)', //La sobra del menú para móviles
        'grid': '0 2px 5px rgb(50, 50, 50)', //La sombra de los elementos del grid
      },
      colors: {
        'active': 'rgb(156, 16, 16)', //Color de los enlaces "activos" en el menú
        'hover': 'rgb(255, 0, 0)', //Color de los enlaces cuando el ratón está encima (hover)
        'grid1': 'rgba(230,230,230,0.6)', //Color de fondo de una parte de retícula del inicio
        'grid2': 'rgba(211, 250, 222, 0.9)', //Color de fondo de una parte de retícula del inicio
      },
      backgroundImage: {
        'home-image': "url('../images/grid.jpg')", //Fondo de la retícula de inicio
      },
      gridTemplateColumns: {
        'md': 'auto auto 100px auto', //La retícula de la página de inicio
      },
      gridTemplateRows: {
        'md': 'auto 50px 100px auto', //La retícula de la página de inicio
        'sm': 'auto auto 50px auto', //La retícula de la página de inicio
      },
      listStyleType: {
        'circle': 'circle', //Para el menú de información del footer
      },

    },
  },
  plugins: [],
}
