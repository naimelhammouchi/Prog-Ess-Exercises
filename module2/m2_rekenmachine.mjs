//Vraag twee getallen aan de gebruiker. Vraag vervolgens aan de gebruiker of hij deze wilt optellen, aftrekken, vermenigvuldigen of delen.

import * as readline from 'node:readline/promises';
import { stdin as input, loadEnvFile, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = await userInput.question('Geef een nummer: ');
let getal2 = await userInput.question('Geef een nummer: ');

let operatie = await userInput.question(
  'Welke operatie wenst u uit te voeren? optellen, aftrekken, vermenigvuldigen of delen : '
);

if (operatie == 'optellen') {
  console.log(
    `Je koos voor optellen, het resultaat is: ${
      Number(getal1) + Number(getal2)
    }`
  );
} else if (operatie == 'aftrekken') {
  console.log(
    `Je koos voor aftrekken, het resultaat is: ${
      Number(getal1) - Number(getal2)
    }`
  );
} else if (operatie == 'vermenigvuldigen') {
  console.log(
    `Je koos voor vermenigvuldigen, het resultaat is: ${
      Number(getal1) * Number(getal2)
    }`
  );
} else if (operatie == 'delen') {
  console.log(
    `Je koos voor delen, het resultaat is: ${Number(getal1) / Number(getal2)}`
  );
} else {
  console.log('Ongeldige operatie gekozen.');
}

process.exit();
