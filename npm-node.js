"use strict";

var undici = require("undici");
var realFetch = undici.fetch;

module.exports = function (url, options) {
	if (/^\/\//.test(url)) {
		url = "https:" + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = undici.Response;
	global.Headers = undici.Headers;
	global.Request = undici.Request;
}

module.exports.Buffer = require("safe-buffer").Buffer;
