const isServer = require('./iso-babel').isServer;
const isClient = require('./iso-babel').isClient;

if (isServer) {
  console.log(isServer);
} else {
  console.log(isClient);
}



