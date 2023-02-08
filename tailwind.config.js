/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/home/background-home-desktop.jpg')",
        mobile: "url('/home/background-home-mobile.jpg')",
        tablet: "url('/home/background-home-tablet.jpg')",
        destinationDesktop:
          "url('/destination/background-destination-desktop.jpg')",
        destinationMobile:
          "url('/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('/destination/background-destination-tablet.jpg')",
        crewMobile: "url('/crew/background-crew-mobile.jpg')",
        crewDesktop: "url('/crew/background-crew-desktop.jpg')",
        crewTablet: "url('/crew/background-crew-tablet.jpg')",
        techDesktop: "url('/technology/background-technology-desktop.jpg')",
        techMobile: "url('/technology/background-technology-mobile.jpg')",
        techTablet: "url('/technology/background-technology-tablet.jpg')",
      },
      colors: {
        menuColor: "hsl(231, 77%, 90%)",
        homeParagraph: "hsla(231, 79%, 90%, 1)",
        line: "hsla(231, 15%, 26%, 1)",
        techColor: "hsla(230, 35%, 7%, 1)",
      },
      fontFamily: {
        paragraphFont: "var(--barlow)",
        titleFont: "var(--bellefair)",
        extraFont: "var(--barlowCondensed)",
      },
    },
  },
  plugins: [],
};
