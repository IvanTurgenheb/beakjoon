const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let S = input[0];

let 중복제거Set = new Set();

for (let i = 0; i < S.length; i++) {
  for (let j = i + 1; j <= S.length; j++) {
    중복제거Set.add(S.slice(i, j));
  }
}

console.log(중복제거Set.size);
