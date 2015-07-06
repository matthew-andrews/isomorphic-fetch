"use strict";

var realFetch = require('node-fetch');
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};
module.exports.Response = realFetch.Response;
module.exports.Headers = realFetch.Headers;
module.exports.Request = realFetch.Request;

global.fetch || (global.fetch = module.exports);
global.Response || (global.Response = module.exports.Response);
global.Headers || (global.Headers = module.exports.Headers);
global.Request || (global.Request = module.exports.Request);
