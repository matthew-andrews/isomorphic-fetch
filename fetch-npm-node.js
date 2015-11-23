"use strict";

var realFetch = require('node-fetch');
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = module.exports.Response = realFetch.Response;
	global.Headers = module.exports.Headers = realFetch.Headers;
	global.Request = module.exports.Request = realFetch.Request;
}
