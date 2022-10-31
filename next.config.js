/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
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
	images: {
		remotePatterns: [
			{
			  protocol: 'https',
			  hostname: 's3.ap-northeast-2.amazonaws.com/files.aionco.xyz/afsmall/images/brand/',
			  port: '',
			  pathname: '/**',
			},
			{
			  protocol: 'https',
			  hostname: 'www.hyper-link.kr',
			  port: '',
			  pathname: '/**',
			},
		  ],
        // domains: ["https://s3.ap-northeast-2.amazonaws.com", "www.hyper-link.kr", "https://www.hyper-link.kr:38080/", "https://s3.ap-northeast-2.amazonaws.com/files.aionco.xyz/afsmall/images/brand/tNbsh4COmNs3aODv.png"],
    },
}

module.exports = nextConfig
