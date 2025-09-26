import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let geboorteJaar = await userInput.question('Wat is je geboortejaar? ');
let toekomstigJaar = await userInput.question(
  'In welk jaar wil je weten hoe oud je zal zijn? '
);

let leeftijd = parseInt(toekomstigJaar) - parseInt(geboorteJaar);

console.log(
  'In het jaar ' +
    toekomstigJaar +
    ' zal je ' +
    leeftijd +
    ' of ' +
    (leeftijd - 1) +
    ' jaar oud zijn, als je geboren bent in ' +
    geboorteJaar
);
process.exit();
