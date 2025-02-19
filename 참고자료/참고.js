const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = parseInt(input[0]); // 테스트 케이스 개수
let index = 1;

for (let t = 0; t < N; t++) {
  let k = parseInt(input[index++]); // 층
  let n = parseInt(input[index++]); // 호

  let dp = Array.from(Array(k + 1), () => Array(n).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      if (j == 1) {
        dp[i][j] = 1;
      } else if (j > 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  console.log(dp[k][n]);
}
