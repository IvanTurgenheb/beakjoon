const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 총 학생의 번호에 대한 배열
let totalStudents = [];

Array.from({ length: 30 }).map((_, idx) => totalStudents.push(idx + 1));

// 과제를 한 학생들에 대한 배열
const students = input.sort((a, b) => a - b).map(Number);

// 과제를 했다면 1을 아니라면 0을 넣기 위해서 만든 배열 [0, 0, 0, ...]
const arr = Array.from({ length: 30 }).fill(0);

// 과제를 했다면 arr[idx]의 값으로 1이 들어감, 아니라면 그대로 0
for (let i = 0; i < totalStudents.length; i++) {
  for (let j = 0; j < students.length; j++) {
    if (totalStudents[i] == students[j]) arr[i]++;
  }
}

const result = [];

// arr[idx]가 1보다 작은 경우는 출석하지 않은 경우
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 1) result.push(i + 1);
}

// 순서에 맞게 출력해야 되므로 정렬을 시킴
const numArray = result.sort((a, b) => a - b);

// 출력
console.log(numArray[0]);
console.log(numArray[1]);
