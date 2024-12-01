const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const lines = input.trim().split('\n');

let leftList = [];
let rightList = [];

lines.forEach((line) => {
  const [left, right] = line.trim().split(/\s+/).map(Number);
  if (!isNaN(left) && !isNaN(right)) {
    leftList.push(left);
    rightList.push(right);
  }
});

const rightFreqMap = {};
rightList.forEach((num) => {
  rightFreqMap[num] = (rightFreqMap[num] || 0) + 1;
});

let similarityScore = 0;
leftList.forEach((num) => {
  const count = rightFreqMap[num] || 0;
  similarityScore += num * count;
});

console.log(similarityScore);
