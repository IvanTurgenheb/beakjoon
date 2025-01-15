const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const word = input[0].toUpperCase().split("");
let resultObj = {};

word.forEach((keyword) => {
  resultObj[keyword] = (resultObj[keyword] ?? 0) + 1;
});

const maxValueCount = Math.max(...Object.values(resultObj));

const maxKeys = Object.keys(resultObj).filter(
  (key) => resultObj[key] == maxValueCount
);

if (maxKeys.length > 1) console.log("?");
console.log(maxKeys[0]);
