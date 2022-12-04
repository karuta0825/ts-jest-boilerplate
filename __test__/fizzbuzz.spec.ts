import * as assert from 'power-assert';
import { FizzBuzz } from '../src/FizzBuzz';

const table = [
  [1, 1],
  [2, 2],
  [3, 'Fizz'],
  [4, 4],
  [5, 'Buzz'],
  [6, 'Fizz'],
  [7, 7],
  [8, 8],
  [9, 'Fizz'],
  [10, 'Buzz'],
  [11, 11],
  [12, 'Fizz'],
  [13, 13],
  [14, 14],
  [15, 'Fizz Buzz'],
];

//
it.each(table)('FizzBuzz(%i) => %s', (a: any, expected) => {
  assert.equal(FizzBuzz(a), expected);
});
