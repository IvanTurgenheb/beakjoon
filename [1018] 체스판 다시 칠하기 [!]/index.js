const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [x, y] = input[0].split(" ").map(Number);

let arr = [];

for (let i = 1; i <= x; i++) {
  const row = input[i].split("");
  arr.push(row);
}

let minCnt = 99999;

for (let i = 0; i <= x - 8; i++) {
  for (let j = 0; j <= y - 8; j++) {
    let cntW시작 = 0;
    let cntB시작 = 0;

    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if ((k + l) % 2 == 0) {
          if (arr[k][l] !== "B") cntB시작++;
          if (arr[k][l] !== "W") cntW시작++;
        } else {
          if (arr[k][l] !== "B") cntW시작++;
          if (arr[k][l] !== "W") cntB시작++;
        }
      }
    }

    minCnt = Math.min(minCnt, cntW시작, cntB시작);
  }
}

console.log(minCnt);
