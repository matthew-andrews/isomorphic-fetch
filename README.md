isomorphic-fetch
================

Fetch for node and Browserify.  Built on top of [GitHub's WHATWG Fetch polyfill](https://github.com/github/fetch).

## Warnings

- This adds `fetch` as a global so that its API is consistent between client and server.
- You must bring your own Promise polyfill, I suggest es6-promise.

## Installation

```sh
npm install --save isomorphic-fetch es6-promise
```

## Usage

```js
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('https://offline-news-api.herokuapp.com/stories')
	.then(function(response) {
		return response.json();
	})
	.then(function(stories) {
		console.log(stories);
	});
```

## License

All open source code released by FT Labs is licenced under the MIT licence.  Based on [the fine work by](https://github.com/github/fetch/pull/31) **[jxck](https://github.com/Jxck)**.
