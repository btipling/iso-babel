'use strict';
const packpath = require('packpath');
const path = require('path');
const rootDir = packpath.parent();
const packageInfo = require(`${rootDir}/package.json`);
const isoLoad = require('../iso-babel');

module.exports = function (loaderType) {
  const loadPath = packageInfo['iso-babel'].load[loaderType];
  let fullLoadPath = `${rootDir}/${loadPath}`;
  if (fullLoadPath[fullLoadPath.length - 1] !== '/') {
    fullLoadPath += '/';
  }
  return function (Babel) {
    const Plugin = Babel.Plugin;
    const types = Babel.types;
    return new Plugin('iso-babel', {
      visitor: {
        CallExpression: function (node, parent) {
          if (node.callee.name === isoLoad.isoLoader) {
            if (!node.arguments.length) {
              return;
            }
            const isoLoadPath = node.arguments[0].raw.split('\'').join('').split('"').join('');
            const requirePath = `${fullLoadPath}/${isoLoadPath}`;
            return this.replaceWithSourceString(`require('${requirePath}')`);
          }
        }
      }
    });
  }
}


