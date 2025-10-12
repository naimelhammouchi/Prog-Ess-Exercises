const fibonacci = [0, 1];
while (fibonacci.length < 10) {
  const nextValue =
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(nextValue);
}
console.log(fibonacci);
process.exit();
