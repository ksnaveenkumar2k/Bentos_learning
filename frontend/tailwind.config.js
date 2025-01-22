/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  marquee: {
			"0%": { transform: "translateX(100%)" },
			"100%": { transform: "translateX(-100%)" },
		  },
		},
		animation: {
		  marquee: "marquee 10s linear infinite",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  