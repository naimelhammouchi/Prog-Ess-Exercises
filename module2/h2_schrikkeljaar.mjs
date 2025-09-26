import * as readline from 'node:readline/promises';
import { stdin as input, loadEnvFile, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let schrikkeljaar = await userInput.question('Welk jaar wil je nakijken ? : ');

if (
  (schrikkeljaar % 4 === 0 && schrikkeljaar % 100 !== 0) ||
  schrikkeljaar % 400 === 0
) {
  console.log(`De maand februarie heeft 29 dagen in het jaar ` + schrikkeljaar);
} else {
  console.log(`de maand februarie heeft 28 dagen in het jaar ` + schrikkeljaar);
}

process.exit();
