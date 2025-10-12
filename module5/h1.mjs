function sumOfDivisors(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function perfectNumber(num) {
  for (let i = 1; i <= num; i++) {
    if (sumOfDivisors(i) === i) {
      console.log(`${i} is een perfect getal`);
    }
  }
}

perfectNumber(100);
