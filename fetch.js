module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return require('node-fetch').call(this, url, options);
};
