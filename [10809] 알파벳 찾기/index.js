let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const word = input[0].split("");

const resultArray = Array.from({ length: alphabet.length }).fill(-1);

alphabet.forEach((keyword, i) => {
  word.forEach((word, idx) => {
    if (word == keyword) {
      if (resultArray[i] !== -1) return;
      resultArray[i] = idx;
    }
  });
});

console.log(...resultArray);
