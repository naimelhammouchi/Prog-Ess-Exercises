import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let mini = 5;
let maxi = 20;

let check = await userInput.question(
  'Ligt je getal tussen de mini en de maxi ? : '
);

console.log(
  check >= mini && check <= maxi
    ? 'je getal ' + check + ' ligt tussen de ' + mini + ' en de ' + maxi
    : 'je getal ' + check + ' ligt niet tussen de ' + mini + ' en de ' + maxi
);

process.exit();
