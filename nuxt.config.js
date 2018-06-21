module.exports = {
	// Server side rendering turned on
	mode: 'universal',

	// Headers of the page
	head: {
		title: 'odriscollsbar',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js project'
			}
		],
		link: [{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:400,700'
			}
		]
	},

	// Customize the progress bar color
	loading: false,

	// Global css
	css: ['@/assets/css/app.css',
		'@/assets/css/modular.css',
		'@/assets/css/variables.css'
	],

	// Plugins
	plugins: ['~/plugins/core-compontents.js'],

	// Modules
	modules: [
		// 'bootstrap-vue/nuxt'
	],

	// Build configuration
	build: {
		/*
		 ** You can extend Webpack config here
		 ** Run ESLint on save
		 */
		extend(config, {
			isDev,
			isClient
		}) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
		postcss: [
			require('tailwindcss')('./tailwind.js'),
			require('autoprefixer'),
		]
	}
}
