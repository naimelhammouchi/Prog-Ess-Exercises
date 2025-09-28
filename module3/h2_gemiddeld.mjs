import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let getal = await userInput.question('Geef een getal: ');

let som = 0;
let aantal = 1;
let gemiddelde = 0;

while (gemiddelde < 25) {
  som += parseInt(getal);
  gemiddelde = som / aantal;
  aantal++;
  getal = await userInput.question('Geef een getal: ');
}

console.log(`Het gemiddelde is ${gemiddelde}`);
process.exit();
