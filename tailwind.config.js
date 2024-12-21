/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	  },
	  fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	  },
	  extend: {
		colors: {
		  primary: "var(--primary-color)",
		  accent: {
			DEFAULT: "rgba(var(--accent-color), <alpha-value>)",
			hover: "rgba(var(--accent-color), 0.7)",
		  },
		  slate: {
			DEFAULT: "var(--slate-color)",
			dark: "var(--slate-dark-color)", 
			
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
  };
  