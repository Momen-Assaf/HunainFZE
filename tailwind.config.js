/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "collection-1-background": "var(--collection-1-background)",
        "collection-1-background-1": "var(--collection-1-background-1)",
        "collection-1-background-secondary": "var(--collection-1-background-secondary)",
      },
    },
  },
  plugins: [],
};
