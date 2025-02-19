const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let n = Number(input[0]);

const memoArray = [
  { count0: 1, count1: 0 },
  { count0: 0, count1: 1 },
];

const 피보나치 = (number) => {
  if (memoArray[number] !== undefined) {
    return memoArray[number];
  }
  const fib1 = 피보나치(number - 1);
  const fib2 = 피보나치(number - 2);

  memoArray[number] = {
    count0: fib1.count0 + fib2.count0,
    count1: fib1.count1 + fib2.count1,
  };

  return memoArray[number];
};

for (let i = 1; i <= n; i++) {
  const { count0, count1 } = 피보나치(Number(input[i]));
  console.log(count0, count1);
}
