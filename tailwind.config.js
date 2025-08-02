module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)"
        },
        sidebar: {
          background1: "var(--sidebar-bg-1)"
        },
        header: {
          text1: "var(--header-text-1)"
        },
        button: {
          background1: "var(--button-bg-1)"
        }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};