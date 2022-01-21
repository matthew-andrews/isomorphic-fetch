# redstone-isomorphic-fetch

Redstone's isomorphic-fetch is a fork of [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch).
It adds `fetch` as global so its API is consistent between client and server. It uses standard fetch() method on client's side and [undici](https://github.com/nodejs/undici) - which is a http client written for Node.js - on server's side.

## Installation

### NPM

```sh
npm install --save redstone-isomorphic-fetch
```

### YARN

```sh
yarn add redstone-isomorphic-fetch
```

### Bower

```sh
bower install --save redstone-isomorphic-fetch
```

## Usage

```js
import "redstone-isomorphic-fetch";

fetch("//api.redstone.finance")
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
```
