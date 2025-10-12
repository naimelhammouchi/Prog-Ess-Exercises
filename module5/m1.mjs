import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let guessComputer = random(1, 10);

let guessNumber = await userInput.question('Raad een getal tussen 1 en 10: ');

let guess = false;

while (!guess) {
  if (parseInt(guessNumber) === guessComputer) {
    console.log('Goed geraden!');
    guess = true;
  } else if (parseInt(guessNumber) < guessComputer) {
    console.log('Hoger!');
    guessNumber = await userInput.question('Probeer het nog eens: ');
  } else if (parseInt(guessNumber) > guessComputer) {
    console.log('Lager!');
    guessNumber = await userInput.question('Probeer het nog eens: ');
  } else {
    console.log('Dat is geen geldig getal, probeer het nog eens.');
    guessNumber = await userInput.question('Raad een getal tussen 1 en 10: ');
  }
}
process.exit();
