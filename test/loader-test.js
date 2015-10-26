#! /usr/bin/env node
'use strict';

const fs = require('fs');
const babel = require('babel')

fs.readFile('./example/loader-script.js', 'utf8', (err, contents) => {
  let result = babel.transform(contents, {
    plugins: ['./load-server'],
  });
  fs.writeFile('./gen-load-server.js', result.code, {encoding: 'utf8'}, err => {
    if (err) {
      console.log('Received an error', err);
      process.exit(1);
    }
  });
  result = babel.transform(contents, {
    plugins: ['./load-client'],
  });
  fs.writeFile('./gen-load-client.js', result.code, {encoding: 'utf8'}, err => {
    if (err) {
      console.log('Received an error', err);
      process.exit(1);
    }
  });
});



