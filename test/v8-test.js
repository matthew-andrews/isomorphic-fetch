var v8 = require("../npm-node").v8;
var expect = require("chai").expect;

describe("v8", function () {
	it("should be defined", function () {
		expect(v8).to.be.a("object");
	});
});
