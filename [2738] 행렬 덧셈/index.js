const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const A = [];
const B = [];

for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(Number);
  A.push(row);
}

for (let j = N + 1; j <= N * 2; j++) {
  const row = input[j].split(" ").map(Number);
  B.push(row);
}

let result = [];

for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(A[i][j] + B[i][j]);
  }
  result.push(row);
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}
