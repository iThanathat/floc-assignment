export function Assignment1(n: number) {
  if (n < 1 || n > 180) {
    throw new Error("Number must be in range of 1-180");
  } else if (n % 2 !== 0) {
    return n * 2;
  } else {
    return n;
  }
}

console.log(Assignment1(5));
console.log(Assignment1(6));
// console.log(Assignment1(0)); for testing a number that out of range
// console.log(Assignment1(181)); for testing a number that out of range
