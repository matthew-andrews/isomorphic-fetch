"use strict";

// var realFetch = require("node-fetch");
var realFetch = require("undici").request;
module.exports = function (url, options) {
	if (/^\/\//.test(url)) {
		url = "https:" + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}
