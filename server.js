global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var noConflictWindow = global.window;
global.window = {};
require('fetch');
global.fetch = global.window.fetch;
global.window = noConflictWindow;
module.exports = global.fetch;
