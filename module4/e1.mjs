import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let zijde1 = await userInput.question(
  'Geef een afmeting voor de eerste zijde: '
);
let zijde2 = await userInput.question(
  'Geef een afmeting voor de tweede zijde: '
);

console.log(
  `De oppervlakte van een rechthoek met zijden ${zijde1} en ${zijde2} is ${
    zijde1 * zijde2
  }`
);

process.exit();
