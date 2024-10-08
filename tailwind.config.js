/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*', './css/**/*.{html,js}'],
	// content: ['./**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ['"Montserrat"'],
				Unbounded: ['"Unbounded"'],
				ArgentumSans: ['"ArgentumSans"'],
				Muller: ['"Muller"'],
			},
			colors: {
				gray: '#3D3D3D',
				'line-border': '#DBDBDB',
				'card-circle': '#D9D9D9',
				'text-grey': '#00000066',
				'text-grey-light': '#36363699',
				coral: '#EF924F',
				date: '#3D3D3D99',
				'green-dark': '#3C606F',
				'input-dark': '#FFFFFFB2',
			},
			screens: {
				'lg-plus': '992px',
			},
			boxShadow: {
				'custom': '0px 4px 25px 0px rgba(0, 0, 0, 0.1)', // shaqum va rangni moslashtirish
			},
		},
	},
	plugins: [],
};
