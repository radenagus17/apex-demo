/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: 0,
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      keyframes: {
        upDown: {
          "0%, 100%": { translate: "0px -2rem" },
          "50%": { translate: "0px 0px" },
        },
        flow: {
          "0%, 100%": { translate: "0px 0px" },
          "50%": { translate: "-182px 0px" },
        },
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      colors: {
        primary: "#71C9CE",
        secondary: "#A6E3E9",
        tertiary: "#CBF1F5",
        "gray-meta": "#DEDEDE",
        attention: "#FFBE5E",
      },
      backgroundImage: {
        "bg-login": "url('/BgLogin.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
