/** Command-line tool to generate Markov text. */

const fs = require('fs');
const process = require('process');
const axios = require('axios');

const { MarkovMachine } = require('./markov');

const input = process.argv[2];
const source = process.argv[3];

if (!source) {
  console.log("No source provided.");
  process.exit(1);
}

switch (input) {
  case 'file':
    getTextFromFile(source);
    break;
  case 'url':
    getTextFromURL(source);
    break;
  default:
    console.log('Usage: makeText [file filename | url url]');
    process.exit(1)
}

function getTextFromFile(filename) {
  fs.readFile(filename, 'utf-8', function(error, data) {
    if(error) {
      console.log(error, "error!");
      process.exit(1);
    }
    const mm = new MarkovMachine(data);
    console.log(mm.makeText());
  });
  
}

function getTextFromURL(url) {
  axios.get(url)
  .then(response => {
    const mm = new MarkovMachine(response.data);
    console.log(mm.makeText());
  })
  .catch(error => {
    console.log(error, "error");
    process.exit(1);
  })
}