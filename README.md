isomorphic-fetch [![Build Status](https://travis-ci.org/matthew-andrews/isomorphic-fetch.svg?branch=master)](https://travis-ci.org/matthew-andrews/isomorphic-fetch)
================

Fetch for node and Browserify.  Built on top of [GitHub's WHATWG Fetch polyfill](https://github.com/github/fetch).

## Warnings

- This adds `fetch` as a global so that its API is consistent between client and server.
- You must bring your own ES6 Promise compatible polyfill, I suggest [es6-promise](https://github.com/jakearchibald/es6-promise).

For [ease-of-maintenance and backward-compatibility reasons][why polyfill], this library will always be a polyfill. As a "safe" alternative, which does not modify the global, consider [fetch-ponyfill][].

[why polyfill]: https://github.com/matthew-andrews/isomorphic-fetch/issues/31#issuecomment-149668361
[fetch-ponyfill]: https://github.com/qubyte/fetch-ponyfill

## Installation

### NPM

```sh
npm install --save isomorphic-fetch es6-promise
```

### Bower

```sh
bower install --save isomorphic-fetch es6-promise
```

## Usage

```js
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('//offline-news-api.herokuapp.com/stories')
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(stories) {
		console.log(stories);
	});
```

## License

All open source code released by FT Labs is licenced under the MIT licence.  Based on [the fine work by](https://github.com/github/fetch/pull/31) **[jxck](https://github.com/Jxck)**.
