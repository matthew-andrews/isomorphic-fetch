// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
var globalObj = typeof self === 'undefined' ? global : self;
module.exports = globalObj.fetch.bind(globalObj);
