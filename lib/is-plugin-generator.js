'use strict';
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
            if (node.alternate) {
              this.insertBefore(node.alternate);
            }
            this.dangerouslyRemove();
          }
        }
      }
    });
  }
}

