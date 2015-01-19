"use strict";

global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var noConflictSelf = global.self;
global.self = {};
require('whatwg-fetch');
global.fetch = global.self.fetch;
global.Headers = global.self.Headers;
global.Request = global.self.Request;
global.Response = global.self.Response;
global.self = noConflictSelf;
