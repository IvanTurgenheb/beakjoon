let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const grade = input[1].split(" ").map(Number);
const newGrade = [];

const M = Math.max(...grade);

Array.from({ length: N }, (_, idx) => newGrade.push((grade[idx] / M) * 100));

const newGradeAvg = newGrade.reduce((acc, cur) => acc + cur, 0) / N;

console.log(newGradeAvg);
