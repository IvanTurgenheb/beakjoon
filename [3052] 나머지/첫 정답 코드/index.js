const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const 나머지Input = input.map((number) => Number(number) % 42);

const 중복제거나머지 = [...new Set(나머지Input)];

console.log(중복제거나머지.length);
