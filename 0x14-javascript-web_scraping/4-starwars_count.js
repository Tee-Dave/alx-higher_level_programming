#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  const movies = JSON.parse(body).results;
  let appearances = 0;

  for (const movie of movies) {
    movie.characters.forEach(character => {
      if (character.includes('18')) {
        appearances++;
      }
    });
  }
  console.log(appearances);
});
