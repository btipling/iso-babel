module.exports = function (trueContext, falseContext) {
    return function (Babel) {
    const Plugin = Babel.Plugin;
    const types = Babel.types;
    return new Plugin('iso-babel', {
      visitor: {
        IfStatement: function (node, parent) {
          if (node.test.name === trueContext) {
            this.dangerouslyRemove();
          }
          if (node.test.name === falseContext) {
            return node.consequent.body;
          }
        }
      }
    });
  }
}

