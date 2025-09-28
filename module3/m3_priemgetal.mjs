import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let priem = await userInput.question('Geef een getal: ');

let isPriem = true;
while (isPriem) {
  if (priem % 1 === 0 && priem % priem === 0 && priem % 2 !== 0) {
    console.log(`${priem} is een priemgetal`);
    priem = await userInput.question('Geef een getal: ');
  } else {
    console.log(`${priem} is geen priemgetal`);
    isPriem = false;
  }
}
process.exit();
