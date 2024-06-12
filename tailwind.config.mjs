/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'black': '#606470'
			}
		},
		container: {
			padding: '20px',
			center: true
		}
	},
	plugins: [],
}
