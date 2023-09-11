tailwind.config = {
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#db0007",
        secondary: "#023474",
        border: "#191919",
      },
      screens: {
        mb: { max: "600px" },
        tab: { max: "900px" },
        web: { max: "1200px" },
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
    },
  },
};
