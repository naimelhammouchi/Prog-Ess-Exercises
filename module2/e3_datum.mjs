import * as readline from 'node:readline/promises';
import { stdin as input, loadEnvFile, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let maand = await userInput.question('Welke maand wil je nakijken ? : ');

switch (maand) {
  case 'februari':
    console.log('28 dagen in een normaal jaar en 29 in een schrikkeljaar');
    break;
  case 'april':
    console.log('30 dagen');
    break;
  case 'juni':
    console.log('30 dagen');
    break;
  case 'september':
    console.log('30 dagen');
    break;
  case 'november':
    console.log('30 dagen');
    break;
  default:
    console.log('31 dagen');
    break;
}

process.exit();
