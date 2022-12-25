/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({ 
	dest: 'public', 
	importScripts: ['customSw.js'],
    register: true,
})
  

module.exports = withPWA({
	reactStrictMode: true,
	output: 'standalone',
	eslint: {
		dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
	compiler: {
		styledComponents: { "fileName": true, "displayName": true, "pure": true }
	},
	webpack: (config) => {
		config.module.rules.push({
		  test: /\.svg$/,
		  use: ["@svgr/webpack"],
		});
	
		return config;
	},
  })
