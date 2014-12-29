global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var noConflictSelf = global.self;
global.self = {};
require('fetch');
global.fetch = global.self.fetch;
global.self = noConflictSelf;
