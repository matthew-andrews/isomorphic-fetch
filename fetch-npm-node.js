"use strict";

var realFetch = (typeof window === 'undefined')
  ? require('node-fetch')
  : require('whatwg-fetch');

module.exports = realFetch;

if (typeof window !== 'undefined' && !window.fetch) {
  window.fetch = module.exports;
  window.Response = realFetch.Response;
  window.Headers = realFetch.Headers;
  window.Request = realFetch.Request;
}

if (typeof global !== 'undefined' && !window.fetch) {
  global.fetch = module.exports;
  global.Response = realFetch.Response;
  global.Headers = realFetch.Headers;
  global.Request = realFetch.Request;
}
