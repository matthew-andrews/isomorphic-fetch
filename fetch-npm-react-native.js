// Self is defined in Chrome Debugger, but not in JavaScriptCore
var globalObject = typeof self === "undefined" ? global : self;
module.exports = globalObject.fetch.bind(globalObject);
