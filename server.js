require('es6-promise').polyfill();
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
require('./fetch');
