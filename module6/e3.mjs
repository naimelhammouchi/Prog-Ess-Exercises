import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

const studenten = [];
let naam = await userInput.question(
  'Welke naam wil je toevoegen? (Typ "S" om te stoppen) '
);
while (naam.toUpperCase() !== 'S') {
  studenten.push(naam);
  naam = await userInput.question(
    'Welke naam wil je toevoegen? (Typ "S" om te stoppen) '
  );
}

function uitnodigingen(lijst) {
  for (let i = 0; i < lijst.length; i++) {
    console.log(
      `Beste ${lijst[i]}, je bent uitgenodigd om deel te nemen aan de cursus Programming fundamentals!`
    );
  }
}
uitnodigingen(studenten);

process.exit();
