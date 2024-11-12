// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add JSX files here for Tailwind to purge unused styles
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF', // Add a custom blue color
      },
    },
  },
  plugins: [],
};
