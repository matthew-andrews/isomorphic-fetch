/*global fetch*/
"use strict";

require('es6-promise').polyfill();
require('../fetch-npm-node');
var expect = require('chai').expect;
var nock = require('nock');
var good = 'hello world. 你好世界。';
var bad = 'good bye cruel world. 再见残酷的世界。';

function responseToText(response) {
	if (response.status >= 400) throw new Error("Bad server response");
	return response.text();
}

function expectHeader(value) {
	return function(response) {
		expect(response.headers.get('X-Isomorphic')).to.equal(value);
		return response;
	};
}

describe('fetch', function() {

	before(function() {
		nock('https://mattandre.ws')
			.get('/succeed.txt')
			.reply(200, good, {
				'X-Isomorphic': 'good'
			});
		nock('https://mattandre.ws')
			.get('/fail.txt')
			.reply(404, bad, {
				'X-Isomorphic': 'bad'
			});
	});

	it('should be defined', function() {
		expect(fetch).to.be.a('function');
	});

	it('should facilitate the making of requests', function() {
		return fetch('//mattandre.ws/succeed.txt')
			.then(expectHeader('good'))
			.then(responseToText)
			.then(function(data) {
				expect(data).to.equal(good);
			});
	});

	it('should do the right thing with bad requests', function() {
		return fetch('//mattandre.ws/fail.txt')
			.then(expectHeader('bad'))
			.then(responseToText)
			.catch(function(err) {
				expect(err.toString()).to.equal("Error: Bad server response");
			});
	});

});
