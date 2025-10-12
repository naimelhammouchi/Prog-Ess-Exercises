function sumOfDivisors(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}
let number = 12;
console.log(`De som van de delers van ${number} is: ${sumOfDivisors(number)}`);
