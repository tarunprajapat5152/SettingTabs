/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova-regular': ['Proxima-Nova-Regular'],
        'proxima-nova-regular-italic': ['Proxima-Nova-Regular-Italic'],
        'proxima-nova-bold': ['Proxima-Nova-Bold'],
        'proxima-nova-semibold': ['Proxima-Nova-Semibold'],
        'montserrat-bold': ['Montserrat-Bold'],
        'montserrat-semibold': ['Montserrat-Semibold'],
        'montserrat-regular': ['Montserrat-Regular'],
      },
    },
  },
  plugins: [],
};
