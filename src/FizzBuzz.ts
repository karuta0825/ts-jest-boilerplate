export function FizzBuzz(x: number) {
  if (x % 15 === 0) {
    return 'Fizz Buzz';
  }

  if (x % 3 === 0) {
    return 'Fizz';
  }

  if (x % 5 === 0) {
    return 'Buzz';
  }

  return x;
}
