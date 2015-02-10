"use strict";

ar fetch = require('node-fetch');
var realFetch = fetch;
module.exports = global.fetch = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};
