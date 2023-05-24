#!/usr/bin/node

const writeMe = require('fs');
const content = process.argv[3];

writeMe.writeFile(process.argv[2], content, (err, data) => {
  if (err) {
    console.log(err);
  }
});
