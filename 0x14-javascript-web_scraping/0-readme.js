#!/usr/bin/node

const readMe = require('fs');

readMe.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
