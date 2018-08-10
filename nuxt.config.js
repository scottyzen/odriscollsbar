module.exports = {
	// Server side rendering turned on
	mode: 'universal',

	// Headers of the page
	head: {
		title: "O' Driscolls Bar",
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
				href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Roboto:400,700'
			}
		]
	},

	// Customize the progress bar color
	loading: {
		color: '#D4956B'
	},

	// Global css
	css: ['@/assets/css/app.css',
		'@/assets/css/modular.css',
	],


	// Plugins
	plugins: ['~/plugins/core-compontents.js', '~/plugins/vue2-google-maps.js'],

	// Modules
	modules: [
		'nuxt-sass-resources-loader'
	],
	sassResources: [
		'@/assets/sass/main.sass'
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
		vendor: ['vue2-google-maps']
	}
}
