const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        AbrilFatface: ['Abril Fatface', 'cursive'],
      },
    },
    colors: {
      primary: {
        light: '#5eead4',
        DEFAULT: '#14b8a6',
        dark: '#0f766e',
      },
      secondary: {
        light: '#bae6fd',
        DEFAULT: '#0ea5e9',
        dark: '#0369a1',
      },
      white: colors.white,
      black: colors.black,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
