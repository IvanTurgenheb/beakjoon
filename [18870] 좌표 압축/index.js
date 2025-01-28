const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = Number(input[0]);
let pureArr = input[1].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let newArray = new Set(arr);
let map = new Map();

Array.from(newArray).forEach((number, idx) => {
  if (!map.has(number)) {
    map.set(number, idx);
  }
});

let result = "";

pureArr.forEach((number) => {
  if (map.has(number)) {
    result += map.get(number) + " ";
  }
});

console.log(result);
