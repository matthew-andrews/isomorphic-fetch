var Buffer = require("../npm-node").Buffer;

var expect = require("chai").expect;

describe("buffer", function () {
	it("should correctly use buffer methods", function () {
		var arr = new Uint16Array(2);

		arr[0] = 5000;
		arr[1] = 4000;

		var buf = Buffer.from(arr.buffer);

		expect(Buffer.isBuffer(buf)).to.equal(true);
	});
});
