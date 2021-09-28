module.exports = {
  theme: {
    height: {
      '500px': '500px'
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
 
    },
  },
  variants: {},
  plugins: [],
};
