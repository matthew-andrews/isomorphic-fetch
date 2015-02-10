"use strict";

var realFetch = require('node-fetch');
module.exports = global.fetch = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};
