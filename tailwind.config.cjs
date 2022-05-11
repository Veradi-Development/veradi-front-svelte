module.exports = {
	// add this section
	prefix: 'tw-',
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px'
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	important: true
};
