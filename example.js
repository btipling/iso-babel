const isServer = require('./iso-babel').isServer;
const isClient = require('./iso-babel').isClient;

if (isServer) {
  console.log(isServer);
}
if (isClient) {
  console.log(isClient);
}


