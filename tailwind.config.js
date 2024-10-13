/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cheeseburga: ["CHEESEBURGA", "sans-serif"], // Add CHEESEBURGA to Tailwind
      },
    },
  },
  plugins: [],
};
