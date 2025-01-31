const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let 상근이의숫자카드Array = input[1].split(" ").map(Number);
let 상근이의숫자카드Map = new Map();

상근이의숫자카드Array.map((number) => {
  상근이의숫자카드Map.set(number, (상근이의숫자카드Map.get(number) || 0) + 1);
});

let 비교Array = input[3].split(" ").map(Number);

let result = "";

비교Array.map((number) => {
  if (상근이의숫자카드Map.get(number)) {
    result += 상근이의숫자카드Map.get(number) + " ";
  } else {
    result += "0 ";
  }
});

console.log(result);
