"use strict";

var realFetch = require('node-fetch');

var isomorphicFetch = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}

	if (isomorphicFetch.Promise) {
		realFetch.Promise = isomorphicFetch.Promise;
	}

	return realFetch.call(this, url, options);
};

module.exports = isomorphicFetch;

if (!global.fetch) {
	global.fetch = isomorphicFetch;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}
