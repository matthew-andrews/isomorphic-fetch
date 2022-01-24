/*global fetch*/
"use strict";

require("../npm-node");
var expect = require("chai").expect;
var good = {
	message: "hello, i'm fine",
	status: "success",
};

var MockAgent = require("./fetch-mock.js");
var setGlobalDispatcher = require("undici").setGlobalDispatcher;
setGlobalDispatcher(MockAgent);

function responseToText(response) {
	if (response.status >= 400) throw new Error("Bad server response");
	return response.json();
}

describe("fetch", function () {
	it("should be defined", function () {
		expect(fetch).to.be.a("function");
	});

	it("should facilitate the making of requests", function (done) {
		fetch("//api.redstone.finance/succeed")
			.then(responseToText)
			.then(function (data) {
				expect(data.message).to.equal(good.message);
				done();
			})
			.catch(done);
	});

	it("should do the right thing with bad requests", function (done) {
		fetch("//api.redstone.finance/fail")
			.then(responseToText)
			.catch(function (err) {
				expect(err.toString()).to.equal("Error: Bad server response");
				done();
			})
			.catch(done);
	});
});
