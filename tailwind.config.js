/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(15deg, rgba(0,0,0,1) 11%, rgba(72,98,212,1) 29%, rgba(0,0,0,1) 48%)",
      },
    },
    // screens: {
    //   'sm': '340px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1540px',
    //   // => @media (min-width: 1280px) { ... }
    // }
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }
      smd: "450px",
      // => @media (min-width: 640px) { ... }
      md: "609px",
      // => @media (min-width: 768px) { ... }
      lg: "805px",
      // => @media (min-width: 1024px) { ... }
      xl: "1020px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  darkMode: "class",
  plugins: [],
};
