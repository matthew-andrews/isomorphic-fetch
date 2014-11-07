isomorphic-fetch
================

Fetch for node and Browserify.  Built on top of [GitHub's WHATWG Fetch polyfill](https://github.com/fetch).

## Installation

```sh
npm install --save isomorphic-fetch
```

## Usage

```js
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

All open source code released by FT Labs is licenced under the MIT licence.
