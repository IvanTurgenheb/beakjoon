const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const memoArray = [0, 1];

const 피보나치 = (number) => {
  if (memoArray[number] !== undefined) return memoArray[number];
  memoArray[number] = 피보나치(number - 1) + 피보나치(number - 2);
  return memoArray[number];
};

피보나치(45);
memoArray.sort((a, b) => b - a);

const 결과함수 = (number) => {
  let idx = 0;
  let resultArray = [];

  while (number >= 0) {
    if (memoArray[idx] <= number) {
      resultArray.push(memoArray[idx]);
      number -= memoArray[idx];
    }

    idx++;
  }
  console.log(resultArray.sort((a, b) => a - b).join(" "));
};

for (let i = 1; i <= Number(input[0]); i++) {
  결과함수(Number(input[i]));
}
