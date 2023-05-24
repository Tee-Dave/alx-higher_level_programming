#!/usr/bin/node
const request = require('request');
const url = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;

function getEndpoints () {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(body).characters);
    });
  });
}

async function getCharacters (characters) {
  for (const character of characters) await getCharacter(character);
}

function getCharacter (character) {
  return new Promise((resolve, reject) => {
    request.get(character, (err, res, body) => {
      if (err) console.log(err);
      console.log(JSON.parse(body).name);
      resolve();
    });
  });
}

getEndpoints()
  .then(data => {
    return getCharacters(data);
  }).catch(err => {
    console.log(err);
  });
