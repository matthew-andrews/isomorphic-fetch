"use strict";
var expect = require('chai').expect;

describe('fetch/safe', function () {
	var restoreGlobalFetch;
	before(function () {
		var globalFetch = global.fetch;
		if (globalFetch) {
			delete global.fetch;
			restoreGlobalFetch = function () {
				global.fetch = globalFetch;
			};
		}
	});
	after(function () {
		if (typeof restoreGlobalFetch === 'function') {
			restoreGlobalFetch();
		}
	});
	it('should not create a global', function () {
		var safeFetch = require('../safe');
		expect(typeof safeFetch).to.eql('function');
		expect(typeof fetch).to.eql('undefined');
	});
});
