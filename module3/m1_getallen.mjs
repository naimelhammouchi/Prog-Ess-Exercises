import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });
let som = 0;
let getal = await userInput.question('Geef een getal: ');
while (getal != 0) {
  som += parseInt(getal);
  getal = await userInput.question('Geef een getal: ');
}
console.log(`De som is ${som}`);
process.exit();
