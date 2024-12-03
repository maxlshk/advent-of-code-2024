const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;

let totalSum = 0;

let match;
while ((match = pattern.exec(input)) !== null) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    totalSum += x * y;
}

console.log(totalSum);
