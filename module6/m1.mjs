import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

const prijzen = [];
let prijs = await userInput.question(
  'Welke prijs wil je toevoegen? (Typ "S" om te stoppen) '
);
while (prijs.toUpperCase() !== 'S') {
  const nummerPrijs = parseFloat(prijs);
  if (!isNaN(nummerPrijs)) {
    prijzen.push(nummerPrijs);
  } else {
    console.log('Ongeldige invoer, voer een geldig nummer in.');
  }
  prijs = await userInput.question(
    'Welke prijs wil je toevoegen? (Typ "S" om te stoppen) '
  );
}

function geefKorting(prijs) {
  return prijs * 0.85;
}

console.log('Prijzen met korting:');
for (let i = 0; i < prijzen.length; i++) {
  const prijsMetKorting = geefKorting(prijzen[i]);
  console.log(
    `Originele prijs: €${prijzen[i].toFixed(
      2
    )}, Prijs met korting: €${prijsMetKorting.toFixed(2)}`
  );
}

process.exit();
