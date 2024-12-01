const readline = require('readline');

let leftList = [];
let rightList = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  const [left, right] = line.trim().split(/\s+/).map(Number);
  if (!isNaN(left) && !isNaN(right)) {
    leftList.push(left);
    rightList.push(right);
  }
});

rl.on('close', () => {
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  let totalDistance = 0;
  for (let i = 0; i < leftList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
  }

  console.log(totalDistance);
});
