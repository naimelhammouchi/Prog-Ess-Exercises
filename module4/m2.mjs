import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let startTop = await userInput.question('start aan de top?(ja/nee) ');
let startLeft = await userInput.question('start links?(ja/nee) ');
let height = await userInput.question('Geef een hoogte: ');

console.log('Output: ');

if (startTop.toLowerCase() === 'ja') {
  for (let i = 1; i <= height; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '*';
    }
    console.log(line);
  }
} else if (startLeft.toLowerCase() === 'ja') {
  for (let i = height; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '*';
    }
    console.log(line);
  }
} else {
  for (let i = height; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += ' ';
    }
    for (let k = height - i + 1; k >= 1; k--) {
      line += '*';
    }
    console.log(line);
  }
}
process.exit();
