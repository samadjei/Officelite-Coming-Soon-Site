module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

const withImages = require('next-images');
module.exports = withImages();

const withSass = require('@zeit/next-sass');
module.exports = withSass();
