export default {
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		title: "Cards Against Humanity Online",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content:
					"Das legendäre Party-Game Cards Against Humanitykannst du hier kostenlos online mit deinen Freunden spielen.",
			},
			{
				hid: "theme-color",
				name: "theme-color",
				content: "#3f51b5",
			},
			{
				hid: "msapplication-TileColor",
				name: "msapplication-TileColor",
				content: "#3f51b5",
			},
		],
		link: [
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{
				rel: "mask-icon",
				href: "/safari-pinned-tab.svg",
				color: "#3f51b5",
			},
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: "hsl(231, 48%, 48%)",
	},
	/*
	 ** Global CSS
	 */
	css: ["@/assets/scss/styles.scss"],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		"@nuxtjs/pwa",
		["vue-wait/nuxt", { useVuex: true }],
		"@nuxtjs/style-resources",
	],
	styleResources: {
		scss: ["~assets/scss/**.scss"],
	},
	// -> https://github.com/nuxt-community/style-resources-module/
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
		postcss: {
			plugins: {
				autoprefixer: {},
			},
			map: true,
		},
	},
	vue: {
		config: {
			productionTip: false,
			devtools: true,
		},
	},
};
