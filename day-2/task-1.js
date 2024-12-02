const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const reports = input.trim().split('\n');

let safeReportsCount = 0;

reports.forEach((line) => {
  const levels = line.trim().split(/\s+/).map(Number);

  let isIncreasing = true;
  let isDecreasing = true;
  let isValidDifferences = true;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    const absDiff = Math.abs(diff);

    if (absDiff < 1 || absDiff > 3) {
      isValidDifferences = false;
      break;
    }

    if (diff > 0) {
      isDecreasing = false;
    } else if (diff < 0) {
      isIncreasing = false;
    } else {
      isValidDifferences = false;
      break;
    }
  }

  if (isValidDifferences && (isIncreasing || isDecreasing)) {
    safeReportsCount += 1;
  }
});

console.log(safeReportsCount);
