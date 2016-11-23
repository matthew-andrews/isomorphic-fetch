// the fetch-polyfill polyfill installs the fetch() function with IE8 Support
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('fetch-ie8');
module.exports = self.fetch.bind(self);
