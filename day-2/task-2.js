const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const reports = input.trim().split('\n');

let safeReportsCount = 0;

reports.forEach((line) => {
  const levels = line.trim().split(/\s+/).map(Number);

  if (isSafe(levels)) {
    safeReportsCount += 1;
  } else {
    let canBeMadeSafe = false;
    for (let i = 0; i < levels.length; i++) {
      const modifiedLevels = levels.slice(0, i).concat(levels.slice(i + 1));
      if (isSafe(modifiedLevels)) {
        safeReportsCount += 1;
        canBeMadeSafe = true;
        break;
      }
    }
  }
});

console.log(safeReportsCount);

function isSafe(levels) {
  if (levels.length < 2) {
    return true;
  }

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

  return isValidDifferences && (isIncreasing || isDecreasing);
}
