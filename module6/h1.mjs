const numbers = [34, 7, 23, 32, 5, 62, 32, 78, 1, 90];
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
console.log('Gesorteerde getallen van groot naar klein: ' + numbers);

process.exit();
