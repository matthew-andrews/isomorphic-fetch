require('es6-promise').polyfill();
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var noConflictWindow = global.window;
global.window = {};
require('fetch');
global.fetch = global.window.fetch;
global.window = noConflictWindow;
