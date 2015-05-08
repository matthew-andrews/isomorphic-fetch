"use strict";

module.exports = require('./fetch');

if (!global.fetch) {
	global.fetch = module.exports;
}
