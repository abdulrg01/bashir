/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
        deo: { min: "1024px", max: "1366px" },
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     screens: {
//       sm: { min: "640px", max: "767px" },
//       // => @media (min-width: 640px and max-width: 767px) { ... }

//       deo: { min: "540px", max: "720px" },

//       // pro: { min: "1024px", max: "1366px" },

//       md: { min: "768px", max: "1023px" },
//       // => @media (min-width: 768px and max-width: 1023px) { ... }

//       lg: { min: "1024px", max: "1279px" },
//       // => @media (min-width: 1024px and max-width: 1279px) { ... }

//       xl: { min: "1280px", max: "1535px" },
//       // => @media (min-width: 1280px and max-width: 1535px) { ... }

//       "2xl": { min: "1536px" },
//       // => @media (min-width: 1536px) { ... }
//     },
//   },
//   plugins: [],
// };
