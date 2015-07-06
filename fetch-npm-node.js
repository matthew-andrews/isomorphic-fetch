"use strict";

var realFetch = require('node-fetch');

function fetch(url, options) {
    if (/^\/\//.test(url)) {
        url = 'https:' + url;
    }
    return realFetch(url, options);
}

fetch.Response = realFetch.Response;
fetch.Headers = realFetch.Headers;
fetch.Request = realFetch.Request;

module.exports = fetch;

if (!global.fetch) {
    global.fetch = fetch;
}
if (!global.Response) {
    global.Response = fetch.Response;
}
if (!global.Headers) {
    global.Headers = fetch.Headers;
}
if (!global.Request) {
    global.Request = fetch.Request;
}
