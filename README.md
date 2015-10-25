#iso-babel

This package is a [Babel](https://github.com/babel/babel) plugin that lets you target the
server or client directly in isomorphic JavaScript.

For example this:

```javascript
import {isServer, isClient} from 'iso-babel';

if (isServer) {
  console.log(isServer);
}
if (isClient) {
  console.log(isClient);
}
```

...becomes this on the server:

```javascript
import {isServer} from 'iso-babel';

console.log(isServer);
```

...and becomes this on the client:

```javascript
import {isClient} from 'iso-babel';

console.log(isClient);
```

This also works:

```
if (isServer) {
  console.log('This is the server.');
} else {
  console.log('We are running on client!');
}
```

This is too:

```
if (isServer) {
  console.log(isServer);
} else if (isClient) {
  console.log(isClient);
  if (isServer) {
    // This code will never appear anywhere or run.
  }
} else {
  console.log('This code will never appear anywhere and will never run.');
}
```

##Usage

```
npm i iso-babel
```
For server:
```bash
babel --plugins iso-babel/is-server myscript.js > server.js
```
For client:
```bash
babel --plugins iso-babel/is-client myscript.js > client.js
```

From JavaScript:

```javascript
const fs = require('fs');
const babel = require('babel')

fs.readFile('./example.js', 'utf8', (err, contents) => {

  const result = babel.transform(contents, {
    plugins: ['iso-babel/is-server'],
  });

  fs.writeFile('./bundle.js', result.code, {encoding: 'utf8'}, err => {
    if (err) {
      console.log('Received an error', err);
      process.exit(1);
    }
  });
});
```

