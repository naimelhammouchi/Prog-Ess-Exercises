import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

const punten = [];
let punt = await userInput.question(
  'Welk punt wil je toevoegen? (Typ "S" om te stoppen) '
);
while (punt.toUpperCase() !== 'S') {
  const nummerPunt = parseFloat(punt);
  if (!isNaN(nummerPunt)) {
    punten.push(nummerPunt);
  } else {
    console.log('Ongeldige invoer, voer een geldig nummer in.');
  }
  punt = await userInput.question(
    'Welk punt wil je toevoegen? (Typ "S" om te stoppen) '
  );
}

function berekenGemiddelde(lijst) {
  if (lijst.length === 0) return 0;
  const som = lijst.reduce((acc, curr) => acc + curr, 0);
  return som / lijst.length;
}

const gemiddelde = berekenGemiddelde(punten);
console.log(`Het gemiddelde is: ${gemiddelde.toFixed(2)}`);

process.exit();
