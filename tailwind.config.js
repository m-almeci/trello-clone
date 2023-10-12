/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'centered-md': '0 0 8px rgba(0, 0, 0, 0.15), 0 0 6px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      fontWeight: {
        'normal': 300,
        'medium': 400,
        'bold': 700
      }
    }
  }
}

