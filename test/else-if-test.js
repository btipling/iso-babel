#! /usr/bin/env node
'use strict';

const fs = require('fs');
const babel = require('babel')

fs.readFile('./example/else-if-script.js', 'utf8', (err, contents) => {
  let result = babel.transform(contents, {
    plugins: ['./is-server'],
  });
  fs.writeFile('./gen-else-if-server.js', result.code, {encoding: 'utf8'}, err => {
    if (err) {
      console.log('Received an error', err);
      process.exit(1);
    }
  });
  result = babel.transform(contents, {
    plugins: ['./is-client'],
  });
  fs.writeFile('./gen-else-if-client.js', result.code, {encoding: 'utf8'}, err => {
    if (err) {
      console.log('Received an error', err);
      process.exit(1);
    }
  });
});


