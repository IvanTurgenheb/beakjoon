const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);

const 도화지 = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let k = 1; k <= N; k++) {
  const [x, y] = input[k].split(" ").map(Number);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      도화지[x + i][y + j] = 1;
    }
  }
}

let 색종이width = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (도화지[i][j] == 1) 색종이width++;
  }
}

console.log(색종이width);
