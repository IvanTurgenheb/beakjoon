const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const word = input[0].toUpperCase().split("");
let resultObj = {};

word.forEach((keyword) => {
  if (resultObj[keyword] == undefined) {
    resultObj[keyword] = 1;
  } else if (resultObj[keyword] !== undefined) {
    resultObj[keyword] += 1;
  }
});

const maxValueCount = Math.max(...Object.values(resultObj));

const getKeyValue = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] == value);
};

let count = 0;

Object.values(resultObj).map((number) => {
  if (number == maxValueCount) count++;
});

if (count > 1) console.log("?");
else console.log(getKeyValue(resultObj, maxValueCount));
