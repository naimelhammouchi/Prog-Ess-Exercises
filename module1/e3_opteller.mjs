// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
// Einde van userInput voorbereiden

// Voeg hier je eigen code in

let getal1 = await userInput.question('Wat is je eerste getal ? ');
let getal2 = await userInput.question('Wat is je tweede getal?  ');

let som = parseInt(getal1) + parseInt(getal2);

console.log('De som van je twee getallen is: ' + som);
process.exit();
