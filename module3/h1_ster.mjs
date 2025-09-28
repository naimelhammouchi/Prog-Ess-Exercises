import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

// We gaan de sterrenpiramide uit M2 aanpassen. Zorg ervoor dat er nu in plaats van een piramide een diamand te voorschijn komt, dus bijvoorbeeld als hoogte gelijk is aan 5 komt er dit tevoorschijn:

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

let hoogte = await userInput.question('Geef de hoogte van de diamand: ');

hoogte = parseInt(hoogte);

for (let i = 1; i <= hoogte; i++) {
  let rij = '';
  for (let j = 1; j <= hoogte - i; j++) {
    rij += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    rij += '*';
  }
  console.log(rij);
}

for (let i = hoogte - 1; i >= 1; i--) {
  let rij = '';
  for (let j = 1; j <= hoogte - i; j++) {
    rij += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    rij += '*';
  }
  console.log(rij);
}

process.exit();
