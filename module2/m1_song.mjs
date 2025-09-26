import * as readline from 'node:readline/promises';
import { stdin as input, loadEnvFile, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let artiest = await userInput.question(
  `Kies een artiest:
1. Red Hot Chili Peppers
2. AC/DC
3. Netsky
4. De Strangers

Geef je keuze in: `
);

/*
if (artiest == '1') {
  console.log(
    `Je koos voor Red Hot Chili Peppers
 Ze zijn de artist achter de hit: Californication`
  );
} else if (artiest == '2') {
  console.log(
    `Je koos voor AC/DC
 Ze zijn de artist achter de hit: Thunderstruck`
  );
} else if (artiest == '3') {
  console.log(
    `Je koos voor Netsky
 Ze zijn de artist achter de hit: Rio`
  );
} else {
  console.log(
    `Je koos voor De Strangers
 Ze zijn de artist achter de hit: 'n Antwerps Peird`
  );
}

*/

switch (artiest) {
  case '1':
    console.log(
      `Je koos voor Red Hot Chili Peppers
 Ze zijn de artist achter de hit: Californication`
    );
    break;
  case '2':
    console.log(
      `Je koos voor AC/DC
 Ze zijn de artist achter de hit: Thunderstruck`
    );
    break;
  case '3':
    console.log(
      `Je koos voor Netsky
 Ze zijn de artist achter de hit: Rio`
    );
    break;
  case '4':
    console.log(
      `Je koos voor De Strangers
 Ze zijn de artist achter de hit: 'n Antwerps Peird`
    );

    break;
  default:
    console.log('Ongeldige keuze, probeer opnieuw.');
    break;
}

process.exit();
