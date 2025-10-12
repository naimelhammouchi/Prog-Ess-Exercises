// 1) oefening op variable: Geef  naam en  lievelingsgetal  of je leeftijd ( mg je zelf kiezen )  in een 2 variabelen  sla op en druk af.

/*import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
let naam = await userInput.question('Wat is je naam? ');
let leeftijd = await userInput.question('Wat is je leeftijd? ');
console.log('Je naam is ' + naam + ' en je leeftijd is ' + leeftijd);

process.exit(); */

/* 2) oefening op datatype en Array

Bespreek  in 5 regels en eigen bewoording de verschillende datatypes: strings, getallen, booleans, arrays, en objecten.

Oefening:  maak een array met je  favoriete fruit(en)  en druk af */

/* Antwoorden: 
strings -> is een dataype die vooral characters of stukken teksten bevat;
getallen -> is een datatype die numerieke waarden bevatten, gehele getallen of zelfs komagetallen;
booleans -> is een datatype die 2 mogelijke waarden kan aangeven namelijk true of false; en die gebruikt worden voor logische operaties;
arrays -> is een datatype die meerdere waarden kan opslaan in een enkele variabele, en die geordend zijn;
objecten -> is een datatype die complexe datastructuren kan opslaan met key/value waarden.
*/

/* let fruit = [
  'kersen',
  'mango',
  'passievrucht',
  'kiwi',
  'watermeloen',
  'meloen',
  'druiven',
];
console.log('mijn favoriete fruiten zijn: ' + fruit); */

// oefening 3 Gebruik 3 string-methodes op 1 variabele
let string = 'Hey mijn naam is naïm en ik ben 26 jaar oud';
let upper = string.toUpperCase();
console.log(string);
console.log(upper);
let length = string.length;
console.log(string);
console.log(length);
let replace = string.replace('naïm', 'Naim');
console.log(string);
console.log(replace);
