const isServer = require('./iso-babel').isServer;
const isClient = require('./iso-babel').isClient;

if (isServer) {
  console.log(isServer);
  if (isServer) {
    console.log('OK, still', isServer);
  } else {
    console.log('Error: This client else code should never appear.');
    process.exit(1);
  }
} else if (isClient) {
  console.log(isClient);
  if (isServer) {
    console.log('Error: This server in client nested code should never appear.');
    process.exit(1);
  }
} else {
  console.log('Error, invalid else selected.');
  process.exit(1);
}




