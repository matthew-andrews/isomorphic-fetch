var MockAgent = require("undici/lib/mock/mock-agent");

var agent = new MockAgent();

var client = agent.get("https://api.redstone.finance");
client
	.intercept({
		path: "/succeed",
		method: "GET",
	})
	.reply(200, {
		message: "hello, i'm fine",
		status: "success",
	});

module.exports = agent;
