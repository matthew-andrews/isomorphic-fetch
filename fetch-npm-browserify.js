// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
if (typeof self !== 'undefined') {
	require('whatwg-fetch');
	module.exports = self.fetch.bind(self);
} else {
	module.exports = require('./fetch-npm-node');
}
