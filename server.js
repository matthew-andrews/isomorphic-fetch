"use strict";

global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var noConflictSelf = global.self;
global.self = {};
require('whatwg-fetch');
global.Headers = global.self.Headers;
global.Request = global.self.Request;
global.Response = global.self.Response;
var realFetch = global.self.fetch;
module.exports = global.fetch = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};
global.self = noConflictSelf;
