import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let sterrenString = await userInput.question('Hoeveel sterren wil je? ');

let sterren = parseInt(sterrenString);

if (isNaN(sterren) || sterren <= 0) {
  console.log('Voer een geldig positief getal in!');
} else {
  for (let i = 1; i <= sterren; i++) {
    console.log('*'.repeat(i));
  }
}

process.exit();
