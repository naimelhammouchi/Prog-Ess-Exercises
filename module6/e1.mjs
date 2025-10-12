import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

async function studentenLijst() {
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
  console.log('Studentenlijst:', studenten);
  process.exit();
}

studentenLijst();
