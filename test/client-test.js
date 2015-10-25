#! /usr/bin/env node
'use strict';

const fs = require('fs');
const babel = require('babel')

fs.readFile('./example/script.js', 'utf8', (err, contents) => {
  const result = babel.transform(contents, {
    plugins: ['./is-client'],
  });
  fs.writeFile('./gen-client.js', result.code, {encoding: 'utf8'}, err => {
    if (err) {
      console.log('Received an error', err);
      process.exit(1);
    }
  });
});



