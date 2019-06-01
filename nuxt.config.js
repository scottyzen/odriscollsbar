const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
	}
}

function collectWhitelist() {
	// do something to collect the whitelist
	return ['html', 'body', 'nuxt-progress', 'map', 'vue-map', 'vue-map-container', 'vue-map-hidden', 'next', 'prev', 'slides', 'blueimp-gallery-carousel', 'slides', 'slide', 'slide-content'];
}

function collectWhitelistPatterns() {
	// do something to collect the whitelist
	return [/^blueimp/, /^gallery/, /^blueimp-gallery/, /^blueimp-gallery-display/, /^blueimp-gallery-controls/];
}

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
				content: 'width=device-width, initial-scale=1, viewport-fit=cover'
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
		}]
	},

	// Customize the progress bar color
	loading: {
		color: '#D4956B',
		height: '4px'
	},

	// Plugins
	plugins: [
		'~/plugins/core-compontents.js',
		'~/plugins/vue2-google-maps.js',
		{
			src: '~plugins/datepicker.js',
			ssr: false
		},
		{
			src: '~/plugins/vue-gallery.js',
			ssr: false
		}
	],

	// Modules
	modules: [
		'@bazzite/nuxt-netlify',
		'nuxt-sass-resources-loader'
	],

	netlify: {
		headers: {
			'/*': [
				'Access-Control-Allow-Origin: *',
				'FileETag: none'
			]
		}
	},

	// SASS
	sassResources: [
		'@/assets/sass/main.sass'
	],

	// Build configuration
	build: {
		extractCSS: true,
		postcss: [
			require('tailwindcss')('./tailwind.js'),
			require('autoprefixer')
		],
		extend(config, {
			isDev
		}) {
			if (!isDev) {
				config.plugins.push(
					new PurgecssPlugin({
						// purgecss configuration
						// https://github.com/FullHuman/purgecss
						paths: glob.sync([
							path.join(__dirname, './pages/**/*.vue'),
							path.join(__dirname, './layouts/**/*.vue'),
							path.join(__dirname, './components/**/*.vue')
						]),
						extractors: [{
							extractor: TailwindExtractor,
							extensions: ['vue']
						}],
						whitelist: collectWhitelist,
						whitelistPatterns: collectWhitelistPatterns
					})
				)
			}
		}
	},
	// Global css
	css: [
		'@/assets/css/app.css',
		'@/assets/css/modular.css'
	],
	vendor: ['vue2-google-maps', 'vue-gallery']
}
