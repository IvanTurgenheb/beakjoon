const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const 사각형변의수 = 2 ** N + 1;

console.log(사각형변의수 * 사각형변의수);
