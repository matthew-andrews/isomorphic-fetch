"use strict";

// add support for jsdomify for running tests
// <https://github.com/niftylettuce/frisbee>
// <https://github.com/podio/jsdomify>
// <https://github.com/github/fetch/issues/238>
if (typeof window === 'object') {
	if (window.fetch)
		throw new Error('`window.fetch` is already defined');
	// sets `window.fetch` along with `Response`, `Request`, and `Headers`
	// see pull github/fetch/issues/238 for this getting added to `window`
	// <https://github.com/github/fetch/blob/master/fetch.js#L315-L317>
  require('whatwg-fetch');
} else if (typeof global === 'object') {
	if (global.fetch)
		throw new Error('`global.fetch` is already defined');
  global.fetch = require('node-fetch');
  global.Request = global.fetch.Request;
  global.Response = global.fetch.Response;
  global.Headers = global.fetch.Headers;
}

