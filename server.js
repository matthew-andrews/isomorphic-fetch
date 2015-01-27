"use strict";

var fetch = require('node-fetch');
var realFetch = fetch;
global.fetch = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};
