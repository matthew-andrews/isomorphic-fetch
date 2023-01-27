# warp-isomorphic

warp-isomorphic is a fork of [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch).

# fetch

It adds `fetch` as global so its API is consistent between client and server. It uses standard fetch() method on client's side and [undici](https://github.com/nodejs/undici) - which is an http client written for Node.js - on server's side.

# Buffer

It provides Buffer object with API consistent between server and client.

## Installation

### NPM

```sh
npm install --save warp-isomorphic
```

### YARN

```sh
yarn add warp-isomorphic
```

## Usage

#### fetch

```js
import "warp-isomorphic";

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

#### Buffer

```js
import { Buffer } from "warp-isomorphic";

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

const buf = Buffer.from(arr.buffer);
```
