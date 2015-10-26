const loaderGenerator = require('./lib/loader-plugin-generator');
const isoBabel = require('./iso-babel');
module.exports = loaderGenerator(isoBabel.isClient);
