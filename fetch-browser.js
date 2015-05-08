// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
var fetchWasDefined = 'fetch' in global;
var originalGlobalFetch = global.fetch;

require('whatwg-fetch');
module.exports = fetch;

if (fetchWasDefined) {
	global.fetch = originalGlobalFetch;
} else {
	delete global.fetch;
}
