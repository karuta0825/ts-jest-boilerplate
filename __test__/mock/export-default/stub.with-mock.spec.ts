import * as assert from 'power-assert';
import double from '../../../src/mock/export-default/double';
import doubleSquare from '../../../src/mock/export-default/doubleSquare';

jest.mock('../../../src/mock/export-default/double');

describe('stub export default function with jest.mock', () => {
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
