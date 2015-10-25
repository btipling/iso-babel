module.exports = function (keep, remove) {
  return function (Babel) {
    const Plugin = Babel.Plugin;
    const types = Babel.types;
    return new Plugin('iso-babel', {
      visitor: {
        IfStatement: function (node, parent) {
          if (node.test.name === keep) {
            return node.consequent.body;
          }
          if (node.test.name === remove) {
            this.dangerouslyRemove();
          }
        }
      }
    });
  }
}

