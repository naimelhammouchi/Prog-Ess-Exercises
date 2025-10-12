let namen = ['Amin', 'Sofie', 'Samantha', 'Karel', 'Mehdi', 'Joris', 'Nuria'];
function zoekNaam(lijst, naam) {
  for (let i = 0; i < lijst.length; i++) {
    if (lijst[i] === naam) {
      return i;
    }
  }
  return -1;
}

console.log('De naam bevindt zich op index: ' + zoekNaam(namen, 'Mehdi'));
console.log(zoekNaam(namen, 'John') + ', naam werd niet gevonden');

process.exit();
