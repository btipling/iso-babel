module.exports = function (Babel) {
  const Plugin = Babel.Plugin;
  const types = Babel.types;
  return new Plugin("iso-babel", {
    visitor: {
      IfStatement: function (node, parent) {
        if (node.test.name === 'isClient') {
          this.dangerouslyRemove();
        }
        if (node.test.name === 'isServer') {
          return node.consequent.body;
        }
      }
    }
  });
}

