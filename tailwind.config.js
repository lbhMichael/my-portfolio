/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem'
		},
		colors: {
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			'gray-dark': '#273444',
			gray: '#8492a6',
			'gray-light': '#d3dce6',

			primary: {
				100: '#2C3A4F',
				200: '#56647b',
				300: '#b4c2dc'
			},
			accent: {
				100: '#FF4D4D',
				200: '#ffecda'
			},
			text: {
				100: '#FFFFFF',
				200: '#e0e0e0'
			},
			bg: {
				100: '#1A1F2B',
				200: '#292e3b',
				300: '#414654'
			}
		}
	},
	fontFamily: {
		sans: ['Graphik', 'sans-serif'],
		serif: ['Merriweather', 'serif']
	},
	extend: {
		backgroundImage: {
			'profile-pic': "url('./assets/michaelb&w.png')"
		}
	}
};
plugins: [];
