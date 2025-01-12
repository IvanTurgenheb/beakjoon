let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const buckets = Array.from({ length: N }, (_, idx) => idx + 1).map(Number);

for (let i = 1; i <= M; i++) {
  const [firstIdx, secondIdx] = input[i].split(" ").map(Number);

  const reverseNumbers = buckets.slice(firstIdx - 1, secondIdx).reverse();
  buckets.splice(firstIdx - 1, secondIdx - firstIdx + 1, ...reverseNumbers);
}

console.log(...buckets);
