/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jxs,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: theme => ({
        'Home-banner-image': "url('/src/Assets/Banner images/HomepageBanner.jpg')",
        'Home-banner-image2':"url('/src/Assets/Banner images/Rectangle 245.png')",
        'AdBnner':"url('/src/Assets/Ad Image/Column add 1 (1).png')",
        'AdBnner2':"url('/src/Assets/Ad Image/Column add 2.png')",
        'Login-Background':"url('/src/Assets/LoginImage/LoginBackground.png')",
      }),

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

