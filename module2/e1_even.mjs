import * as readline from 'node:readline/promises';
import { stdin as input, loadEnvFile, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let cijfer = await userInput.question('Welke cijfer wilt u nakijken ?: ');
let resultaat = cijfer % 2;

console.log(
  resultaat === 0
    ? 'Je cijfer is een even getal'
    : 'Je cijfer is een oneven getal'
);

process.exit();
