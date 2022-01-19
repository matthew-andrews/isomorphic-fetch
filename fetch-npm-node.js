"use strict";

var http = require('http');
var https = require('https');
var realFetch = require('node-fetch');

const httpAgent = new http.Agent({
	keepAlive: true
});
const httpsAgent = new https.Agent({
	keepAlive: true
});

const agent = function(_parsedURL) {
	if (_parsedURL.protocol == 'http:') {
		return httpAgent;
	} else {
		return httpsAgent;
	}
};

module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, {agent, ...options});
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}