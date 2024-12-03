const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const mulPattern = /mul\((\d{1,3}),(\d{1,3})\)/g;
const controlPattern = /(do\(\)|don't\(\))/g;

const tokens = input.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g);

let totalSum = 0;
let isEnabled = true; 

if (tokens) {
    for (const token of tokens) {
        if (token === 'do()') {
            isEnabled = true;
        } else if (token === "don't()") {
            isEnabled = false;
        } else {
            const match = token.match(mulPattern);
            if (match && isEnabled) {
                const [, x, y] = match[0].match(/(\d{1,3}),(\d{1,3})/);
                totalSum += parseInt(x, 10) * parseInt(y, 10);
            }
        }
    }
}

console.log(totalSum);
