/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xs: '430px',
            ...defaultTheme.screens,
        },
        extend: {
            backgroundColor: {
                "modalBg": 'rgba(255, 255, 255, 0.2)',
                "modalContent": 'rgba(255, 255, 255, 1)',
            },
        },
    },
    plugins: [
        // at very end
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}
