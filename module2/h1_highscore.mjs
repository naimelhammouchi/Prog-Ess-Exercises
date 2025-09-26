import * as readline from 'node:readline/promises';
import { stdin as input, loadEnvFile, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let high = 0;
let low = 0;
let getal1 = await userInput.question('Geef een nummer: ');
let getal2 = await userInput.question('Geef een nummer: ');
if (Number(getal1) > Number(getal2)) {
  high = getal1;
  low = getal2;
} else {
  high = getal2;
  low = getal1;
}
let getal3 = await userInput.question('Geef een nummer: ');

if (high < Number(getal3)) {
  high = getal3;
} else if (low > Number(getal3)) {
  low = getal3;
}

let getal4 = await userInput.question('Geef een nummer: ');
if (high < Number(getal4)) {
  high = getal4;
} else if (low > Number(getal4)) {
  low = getal4;
}

let getal5 = await userInput.question('Geef een nummer: ');
if (high < Number(getal5)) {
  high = getal5;
} else if (low > Number(getal5)) {
  low = getal5;
}

let average =
  (Number(getal1) +
    Number(getal2) +
    Number(getal3) +
    Number(getal4) +
    Number(getal5)) /
  5;

console.log(
  'Uit de gegeven nummers is het hoogste nummer: ' +
    high +
    ' , de laagste nummer is: ' +
    low +
    ' en het gemiddelde is: ' +
    average
);

process.exit();
