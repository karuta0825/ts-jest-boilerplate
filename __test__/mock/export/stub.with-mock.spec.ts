import * as assert from 'power-assert';
import { double } from '../../../src/mock/export/double';
import doubleSquare from '../../../src/mock/export/doubleSquare';

jest.mock('../../../src/mock/export/double');

describe('stub export function with jest.mock', () => {
  beforeAll(() => {
    // doubleの返り値を、2に変更する
    (double as jest.Mock).mockReturnValue(2);
  });

  afterAll(() => {
    (double as jest.Mock).mockClear();
  });

  it('返り値は、4になる', () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 4);
  });
});
