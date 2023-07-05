/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#050816',
				secondary: '#aaa6c3',
				tertiary: '#151030',
				'black-100': '#100d25',
				'black-200': '#090325',
				'white-100': '#f3f3f3',
				purple: '#915EFF',
			},
			boxShadow: {
				card: '0px 35px 120px -15px #211e35',
				skill: '0px 0px 5px #fff',
			},
			screens: {
				xs: '450px',
			},
			backgroundColor: {
				purple: '#915EFF',
				'light-purple': '#c5abff',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/light.png')",
			},
			animation: {
				'skill-pulse': {
					'50%': {
						'box-shadow': '0px 0px 10px #fff',
					},
				},
			},
		},
	},
	plugins: [],
};
