/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xs: '430px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [
        // at very end
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}
