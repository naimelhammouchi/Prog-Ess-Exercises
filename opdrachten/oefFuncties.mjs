//oefening 1: Leg uit wat functies zijn en hoe je ze definieert en aanroept.  (  eigen bewoording is prima  Doe dit beknopt tussen 2  en max 5 regels tekst  )

/* Antwoord:  

funcies zijn herbruikbare blokken code die een specifieke taak uitvoeren.Je defineert een functie met als eerst woord 'function', gevolgd door de functienaam en haakjes met eventueel een parameter of paramerters.;
Als je de functies wilt gebruiken, roep je de functienaam aan met haakjes en geef je de eventuele arguementen door.

*/

//oefening 2: Maak  een functie   ( naam optellen ) die twee getallen optelt en het resultaat teruggeeft. Als dit werkt maak je nog een functie verschil , vermenigvuldiging en deling

function som(a, b) {
  return a + b;
}
console.log(som(10, 5));

function verschil(a, b) {
  return a - b;
}
console.log(verschil(10, 5));

function vermenigvuldiging(a, b) {
  return a * b;
}
console.log(vermenigvuldiging(10, 5));

function deling(a, b) {
  return a / b;
}
console.log(deling(10, 5));
