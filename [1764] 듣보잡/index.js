const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let 듣도못함Array = [];
let 보도못함Array = [];

let 듣도보도못함Map = new Map();

let [N, M] = input[0].split(" ").map(Number);

for (let i = 1; i <= N; i++) {
  듣도못함Array.push(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
  보도못함Array.push(input[i]);
}

듣도못함Array.map((듣도못함) => {
  듣도보도못함Map.set(듣도못함, (듣도보도못함Map.get(듣도못함) || 0) + 1);
});

보도못함Array.map((보도못함) => {
  듣도보도못함Map.set(보도못함, (듣도보도못함Map.get(보도못함) || 0) + 1);
});

let resultArray = [];

Array.from(듣도보도못함Map).map(([key, value]) => {
  if (value > 1) resultArray.push(key);
});

resultArray.sort();

console.log(resultArray.length);
console.log(resultArray.join("\n"));
