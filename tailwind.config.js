/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        // at very end
        require('tailwindcss'), 
        require('autoprefixer')
    ],
}
