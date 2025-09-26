import * as readline from 'node:readline/promises';
import { stdin as input, loadEnvFile, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let positiveAnswers = 0;
let negativeAnswers = 0;
let totalQuestions = 5;

let vraag_1 = await userInput.question(
  `Welkom bij de quiz! Beantwoord de volgende 5 vragen:
Vraag 1: Wat is de hoofdstad van Frankrijk?
Jouw antwoord: `
);
if (vraag_1.toLowerCase() === 'parijs') {
  console.log('Goed antwoord!\n');
  positiveAnswers++;
} else {
  console.log('Fout antwoord. Het juiste antwoord is: Parijs\n');
  negativeAnswers++;
}

let vraag_2 = await userInput.question(
  'Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?\nJouw antwoord: '
);
if (vraag_2 === '8') {
  console.log('Goed antwoord!\n');
  positiveAnswers++;
} else {
  console.log('Fout antwoord. Het juiste antwoord is: 8\n');
  negativeAnswers++;
}

let vraag_3 = await userInput.question(
  'Vraag 3: Wat is het grootste zoogdier ter wereld?\nJouw antwoord: '
);
if (vraag_3.toLowerCase() === 'blauwe vinvis') {
  console.log('Goed antwoord!\n');
  positiveAnswers++;
} else {
  console.log('Fout antwoord. Het juiste antwoord is: Blauwe vinvis\n');
  negativeAnswers++;
}

let vraag_4 = await userInput.question(
  "Vraag 4: Wie schreef het toneelstuk 'Romeo en Julia'?\nJouw antwoord: "
);
if (vraag_4.toLowerCase() === 'shakespeare') {
  console.log('Goed antwoord!\n');
  positiveAnswers++;
} else {
  console.log('Fout antwoord. Het juiste antwoord is: Shakespeare\n');
  negativeAnswers++;
}

let vraag_5 = await userInput.question(
  'Vraag 5: Hoeveel poten heeft een spin?\nJouw antwoord: '
);
if (vraag_5 === '8') {
  console.log('Goed antwoord!\n');
  positiveAnswers++;
} else {
  console.log('Fout antwoord. Het juiste antwoord is: 8\n');
  negativeAnswers++;
}

console.log(
  `Je hebt ${positiveAnswers} van de ${totalQuestions} vragen juist beantwoord.`
);

process.exit();
