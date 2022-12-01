/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		// colors: {
		// 	transparent: 'transparent',
		// 	current: 'currentColor',
		// 	'white': '#ffffff',
		// 	'purple': '#3f3cbb',
		// 	'midnight': '#121063',
		// 	'metal': '#565584',
		// 	'tahiti': {
		// 		100: '#cffafe',
		// 		200: '#a5f3fc',
		// 		300: '#67e8f9',
		// 		400: '#22d3ee',
		// 		500: '#06b6d4',
		// 		600: '#0891b2',
		// 		700: '#0e7490',
		// 		800: '#155e75',
		// 		900: '#164e63',
		// 	},
		// 	'silver': '#ecebff',
		// 	'bubble-gum': '#ff77e9',
		// 	'bermuda': '#78dcca',
		// },
		screens: {
			'tablet': '640px',
			// => @media (min-width: 640px) { ... }
			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }
			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
		},
		// spacing: {
		// 	'1': '8px',
		// 	'2': '12px',
		// 	'3': '16px',
		// 	'4': '24px',
		// 	'5': '32px',
		// 	'6': '48px',
		// }
	},
	plugins: [],
}