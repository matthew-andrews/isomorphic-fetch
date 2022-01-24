# redstone-isomorphic

redstone-isomorphic is a fork of [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch).

# fetch

It adds `fetch` as global so its API is consistent between client and server. It uses standard fetch() method on client's side and [undici](https://github.com/nodejs/undici) - which is an http client written for Node.js - on server's side.

# v8

It applies `v8` module for server environment. It is not defined for browser and this difference should be taken into account when determining if v8 methods should be used or not.

## Installation

### NPM

```sh
npm install --save redstone-isomorphic
```

### YARN

```sh
yarn add redstone-isomorphic
```

## Usage

#### fetch

```js
import "redstone-isomorphic";

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

#### v8

```js
import { v8 } from "redstone-isomorphic";

const deepCopy = (input) => {
  if (!!v8) {
    return v8.deserialize(v8.serialize(input));
  }

  return JSON.parse(JSON.stringify(input));
};
```
