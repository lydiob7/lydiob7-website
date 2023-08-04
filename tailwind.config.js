/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0B2638"
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"]
            }
        }
    },
    plugins: []
};
