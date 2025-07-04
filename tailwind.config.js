import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        fontFamily: {
          roboto:['var(--font-roboto)'] ,
          prompt: ['var(--font-prompt)'],
          jost: ['var(--font-jost)'],
          rajdhani: ['var(--font-rajdhani)'],
      },
    },
  },
  plugins: [

    flowbite.plugin(),
  ],
};
