const pluginGenerator = require('./lib/plugin-generator');
const isoBabel = require('./iso-babel');
module.exports = pluginGenerator(isoBabel.isServer, isoBabel.isClient);
