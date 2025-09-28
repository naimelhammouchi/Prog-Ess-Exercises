import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let getal = await userInput.question('Geef een getal: ');

console.log(`De tafel van ${getal}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${getal} x ${i} = ${getal * i}`);
}

process.exit();
