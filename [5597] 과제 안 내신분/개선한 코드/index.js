const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const students = Array.from({ length: 30 }, (_, idx) => Number(idx + 1));

const numberInput = input.map(Number);

const set제출안한Students = new Set(numberInput);

const 제출안한Students = students.filter(
  (student) => !set제출안한Students.has(student)
);

console.log(제출안한Students[0]);
console.log(제출안한Students[1]);
