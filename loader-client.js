const loadGenerator = require('./lib/load-plugin-generator');
const isoBabel = require('./iso-babel');
module.exports = loadGenerator(isoBabel.isClient);

