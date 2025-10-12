function converter(temperatuur, isCelcius) {
  if (isCelcius) {
    return (temperatuur * 9) / 5 + 32; // Celcius naar Fahrenheit
  } else {
    return ((temperatuur - 32) * 5) / 9; // Fahrenheit naar Celcius
  }
}
console.log(
  '25 graden Celcius is gelijk aan ' +
    converter(25, true) +
    ' graden Fahrenheit.'
);
console.log(
  '77 graden Fahrenheit is gelijk aan ' +
    converter(77, false) +
    ' graden Celcius.'
);
