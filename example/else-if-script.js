const isServer = require('./iso-babel').isServer;
const isClient = require('./iso-babel').isClient;

if (isServer) {
  console.log(isServer);
} else if (isClient) {
  console.log(isClient);
} else {
  console.log('Error, invalid else selected.');
  process.exit(1);
}




