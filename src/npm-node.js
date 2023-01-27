"use strict";

var undici = require("undici");
var realFetch = undici.fetch;

var util = require("util");
var TextEncoder = util.TextEncoder;
var TextDecoder = util.TextDecoder;

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
if (!global.TextDecoder) {
	global.TextDecoder = TextDecoder;
}
if (!global.TextEncoder) {
	global.TextEncoder = TextEncoder;
}

module.exports.Buffer = Buffer;
