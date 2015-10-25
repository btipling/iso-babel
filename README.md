#iso-babel

This package is a [Babel](https://github.com/babel/babel) plugin lets you target the
server or client directly in isomorphic JavaScript.

For example this:

```
import {isServer, isClient} from 'iso-babel';

if (isServer) {
  console.log(isServer);
}
if (isClient) {
  console.log(isClient);
}
```

...becomes this on the server:

```
import {isServer} from 'iso-babel';

console.log(isServer);
```

...and becomes this on the client:

```
import {isClient} from 'iso-babel';

console.log(isClient);
```

##Usage

```
npm i iso-babel
```
For server:
```
babel --plugins iso-babel/is-server myscript.js > server.js
```
For client:
```
babel --plugins iso-babel/is-client myscript.js > client.js
```

From JavaScript:

```
const fs = require("fs");
const babel = require("babel")

fs.readFile('./example.js', 'utf8', (err, contents) => {
  const result = babel.transform(contents, {
    extra: {
      whatever: {
        planB: true,
      },
    },
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

