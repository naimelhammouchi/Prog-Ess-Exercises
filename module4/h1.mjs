import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let resultaatUser = await userInput.question('Rock, Paper, Scissor? ');

let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

if (resultaatUser.toLowerCase() === computerChoice) {
  console.log(`Gelijkspel! De computer koos ook ${computerChoice}`);
} else if (
  (resultaatUser.toLowerCase() === 'rock' && computerChoice === 'scissors') ||
  (resultaatUser.toLowerCase() === 'paper' && computerChoice === 'rock') ||
  (resultaatUser.toLowerCase() === 'scissors' && computerChoice === 'paper')
) {
  console.log(`Je wint! De computer koos ${computerChoice}`);
} else {
  console.log(`Je verliest! De computer koos ${computerChoice}`);
}

process.exit();
