/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // explicit container config so behavior is obvious and testable
    container: {
      center: true,
      padding: "1rem", // optional — gives left/right padding on small screens
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
    },
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
      },
    },
  },
  plugins: [],
};
