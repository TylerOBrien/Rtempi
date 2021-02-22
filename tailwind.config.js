module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Purge
  |--------------------------------------------------------------------------
  */

  purge: [],

  /*
  |--------------------------------------------------------------------------
  | Theme
  |--------------------------------------------------------------------------
  */

  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
      '3xl': '2000px'
    },
    extend: {
      colors: {
        //
      },

      width: {
        //
      },

      height: {
        //
      },

      zIndex: {
        //
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
        '3xl': '3rem'
      }
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Variants
  |--------------------------------------------------------------------------
  */
  
  variants: {
    margin: ['responsive', 'first', 'last', 'even', 'odd'],
    padding: ['responsive', 'first', 'last', 'even', 'odd'],
    borderWidth: ['responsive', 'first', 'last', 'even', 'odd'],
    borderColor: ['responsive', 'hover', 'first', 'last', 'even', 'odd'],
    backgroundColor: ['responsive', 'hover', 'first', 'last', 'even', 'odd']
  },

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  */

  plugins: []
};