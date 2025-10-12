import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let guessComputer = random(1, 10);

let guessNumber = await userInput.question('Raad een getal tussen 1 en 10: ');

let leven = 2;

while (leven > 0) {
  if (parseInt(guessNumber) === guessComputer) {
    console.log('Goed geraden!');
    break;
  } else if (parseInt(guessNumber) < guessComputer) {
    console.log('Hoger!');
    leven--;
    guessNumber = await userInput.question('Probeer het nog eens: ');
  } else if (parseInt(guessNumber) > guessComputer) {
    console.log('Lager!');
    leven--;
    guessNumber = await userInput.question('Probeer het nog eens: ');
  } else {
    console.log('Dat is geen geldig getal, probeer het nog eens.');
    leven--;
    guessNumber = await userInput.question('Raad een getal tussen 1 en 10: ');
  }
}
console.log(
  'Helaas, je hebt geen levens meer. Het juiste getal was ' +
    guessComputer +
    '.'
);
process.exit();
