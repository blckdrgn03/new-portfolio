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
			DEFAULT: "var(--accent-color)",
			hover: "var(--accent-hover)",
		  },
		  slate: {
			DEFAULT: "var(--slate-color)",
			50: "var(--slate-color)", 
			100: "var(--slate-color)",
			200: "var(--slate-color)",
			300: "var(--slate-color)",
			400: "var(--slate-color)",
			500: "var(--slate-color)",
			600: "var(--slate-color)",
			700: "var(--slate-color)",
			800: "var(--slate-color)",
			900: "var(--slate-color)",
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
  