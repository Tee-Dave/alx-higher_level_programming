#!/usr/bin/node

const request = require('request');
const dct = {};

request(process.argv[2], (err, res, body) => {
  if (err) {
    console.log(err);
  }
  const tasks = JSON.parse(body);

  for (const task of tasks) {
    const id = task.userId.toString();
    if (!Object.keys(dct).includes(id) && task.completed) {
      dct[id] = 1;
      continue;
    }
    if (task.completed) {
      dct[id]++;
    }
  }
  console.log(dct);
});
