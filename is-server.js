const isGenerator = require('./lib/is-plugin-generator');
const isoBabel = require('./iso-babel');
module.exports = isGenerator(isoBabel.isServer, isoBabel.isClient);
