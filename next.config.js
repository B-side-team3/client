/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig
