/*global fetch*/
"use strict";

require('../fetch-npm-node');
var expect = require('chai').expect;
var nock = require('nock');
var Bluebird = require('bluebird');

function responseToText(response) {
	if (response.status >= 400) throw new Error("Bad server response");
	return response.text();
}

describe('fetch.Promise', function() {
	before(function() {
		fetch.Promise = Bluebird;

		nock('https://mattandre.ws')
			.get('/succeed.txt')
			.reply(200);
	});

	it('should allow Promise library replacement', function() {
		fetch('//mattandre.ws/succeed.txt')
			.then(function (response) {
				expect(global.Response.Promise).to.equal(Bluebird);
				return response.text();
			});
	});
});
