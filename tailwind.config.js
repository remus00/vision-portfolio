/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                app: 'url(/public/images/test.png)',
            },
            backdropFilter: ['responsive', 'hover', 'focus'],
            colors: {
                'custom-dark': '#17181e',
                'close-red': 'rgb(255,83,80)',
                'close-red-dark': 'rgb(159,3,18)',
                'minimize-yellow': 'rgb(255,179,61)',
                'minimize-yellow-dark': 'rgb(175,101,31)',
                'expand-green': 'rgb(0,193,70)',
                'expand-green-dark': 'rgb(0,87,19)',
            },
        },
    },
};
