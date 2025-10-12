import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let number = await userInput.question('Geef een getal: ');

for (let i = 1; i <= number; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += i;
  }
  console.log(line);
}
process.exit();
