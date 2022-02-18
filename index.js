const fs = require('fs');


const words = fs.readFileSync('words.txt').toString().split(' ');


function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}


function getWords() {
  return words;
}


function isInWords(word) {
  return words.includes(word.toUpperCase());
}


module.exports = {
  getRandomWord,
  getWords,
  isInWords,
}
