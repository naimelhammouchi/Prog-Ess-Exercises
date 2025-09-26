import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let dagen = await userInput.question('Geef een aantal dagen in: ');
let uren = await userInput.question('Geef een aantal uren in: ');
let minuten = await userInput.question('Geef een aantal minuten in: ');
let seconden = await userInput.question('Geef een aantal seconden in: ');

let totaalSeconden =
  parseInt(dagen) * 86400 +
  parseInt(uren) * 3600 +
  parseInt(minuten) * 60 +
  parseInt(seconden);

console.log('Het totaal aantal seconden is: ' + totaalSeconden + ' seconden.');
process.exit();
