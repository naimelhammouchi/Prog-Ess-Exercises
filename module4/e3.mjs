import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let start = await userInput.question('Met welk getal beginnen we? ');
let einde = await userInput.question('Met welk getal eindigen we? ');

let deler1 = await userInput.question(
  'Wat is het eerste getal waarop we testen? '
);

let deler2 = await userInput.question(
  'Wat is het tweede getal waarop we testen? '
);

for (let i = start; i <= einde; i++) {
  if (i % deler1 === 0 && i % deler2 == 0) {
    console.log(i);
  }
}

let deelbaar1 = await userInput.question(
  'Moet het getal deelbaar zijn door het eerste getal? (ja/nee) '
);

let deelbaar2 = await userInput.question(
  'Moet het getal deelbaar zijn door het tweede getal? (ja/nee) '
);

for (let i = start; i <= einde; i++) {
  let isDeelbaar1 = deelbaar1.toLowerCase() === 'ja' ? i % deler1 === 0 : true;
  let isDeelbaar2 = deelbaar2.toLowerCase() === 'ja' ? i % deler2 === 0 : true;

  if (isDeelbaar1 && isDeelbaar2) {
    console.log(i);
  }
}

process.exit();
