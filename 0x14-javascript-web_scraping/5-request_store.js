#!/usr/bin/node

const writeMe = require('fs');
const request = require('request');
request(process.argv[2]).pipe(writeMe.createWriteStream(process.argv[3]));
