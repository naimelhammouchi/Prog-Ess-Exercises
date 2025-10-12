function factorial(n) {
  if (n < 1) {
    console.error(
      'Foutmelding: Het getal moet groter dan of gelijk aan 1 zijn.'
    );
    return;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

let factorial = 5;
console.log('Factorial van ${factorial} is: ' + factorial(factorial)); // Output: 120
