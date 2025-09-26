// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
// Einde van userInput voorbereiden

// Voeg hier je eigen code in

/*let getal1 = await userInput.question('Wat is je eerste getal ? ');
let getal2 = await userInput.question('Wat is je tweede getal?  ');

let som = parseInt(getal1) + parseInt(getal2);

console.log('De som van je twee getallen is: ' + som);
process.exit(); */

//medium oefening

let getal3 = 34;
let getal4 = 33;
let som2 = getal3 + getal4;
let verschil = getal3 - getal4;
let product = getal3 * getal4;
let quotient = Math.round(getal3 / getal4);

console.log(
  'De getallen die werden gekozen zijn: ' +
    getal3 +
    ' en ' +
    getal4 +
    ' De som van deze getallen is: ' +
    som2
);
console.log(
  'De getallen die werden gekozen zijn: ' +
    getal3 +
    ' en ' +
    getal4 +
    ' Het verschil van deze getallen is: ' +
    verschil
);
console.log(
  'De getallen die werden gekozen zijn: ' +
    getal3 +
    ' en ' +
    getal4 +
    ' Het product van deze getallen is: ' +
    product
);
console.log(
  'De getallen die werden gekozen zijn: ' +
    getal3 +
    ' en ' +
    getal4 +
    ' Het quotient van deze getallen is: ' +
    quotient
);
