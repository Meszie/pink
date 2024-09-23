/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#b593db",
                secondary: "#cc8eac",
                tertiary: "#fffbf3",
            },
            fontFamily: {
                "gloria-hallelujah": ["Gloria Hallelujah", "cursive"],
                saira: ["sans-serif"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
