function cirkel(straal) {
  return Math.PI * straal * straal;
}

function driehoek(basis, hoogte) {
  return (basis * hoogte) / 2;
}

function rechthoek(zijde1, zijde2) {
  return zijde1 * zijde2;
}

function vierkant(zijde) {
  return zijde * zijde;
}

console.log('Cirkel met straal 5: ' + cirkel(5));
console.log('Driehoek met basis 4 en hoogte 6: ' + driehoek(4, 6));
console.log('Rechthoek met zijden 4 en 6: ' + rechthoek(4, 6));
console.log('Vierkant met zijde 4: ' + vierkant(4));
