const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let numberArray = input.map(Number);

numberArray.forEach((number, idx) => {
  let 비교할number = 1;
  let 비교할numberArray = [];

  if (number === -1) return;

  while (비교할number < number) {
    if (number % 비교할number === 0) {
      비교할numberArray.push(비교할number);
    }

    비교할number++;
  }

  const total약수 = 비교할numberArray.reduce((acc, cur) => {
    return acc + cur;
  });

  if (total약수 === number) {
    let result = `${number} = `;

    비교할numberArray.forEach((number) => {
      if (비교할numberArray[비교할numberArray.length - 1] === number) {
        result += number;
      } else result += number + " + ";
    });

    console.log(result);
  } else {
    console.log(`${number} is NOT perfect.`);
  }
});
