// module.exports = {};
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
// module.exports = withSass();
module.exports = withCSS(withSass({
	cssLoaderOptions: {
		url: false
	}
}))