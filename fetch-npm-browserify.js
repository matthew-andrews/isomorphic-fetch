// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
// module.exports = self.fetch.bind(self);
var globalObject = typeof self === "undefined" ? global : self;
module.exports = globalObject.fetch.bind(globalObject);
