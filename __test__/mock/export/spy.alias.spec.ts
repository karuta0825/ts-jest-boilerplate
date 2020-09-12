import * as assert from 'power-assert';
import * as myModule from '../../../src/mock/export/double';
import doubleSquare from '../../../src/mock/export/doubleSquare';

describe('spy export with alias', () => {
  let spy: jest.SpyInstance;
  beforeAll(() => {
    spy = jest.spyOn(myModule, 'double');
  });

  afterEach(() => {
    spy.mockClear();
  });

  it('spyが呼び出されるのは1回', () => {
    const actual = doubleSquare(3);
    assert.equal(spy.mock.calls.length, 1);
  });

  it('spyの引数は、3である', () => {
    const actual = doubleSquare(3);
    assert.equal(spy.mock.calls[0], 3);
  });

  it('spyは正常に処理が終了する', () => {
    const actual = doubleSquare(3);
    assert.equal(spy.mock.results[0].type, 'return');
  });

  it('spyのreturn値は6である', () => {
    const actual = doubleSquare(3);
    assert.equal(spy.mock.results[0].value, 6);
  });

  it('doubleSquareの戻り値は、(2 * 3) ^ 2 で36になる', () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 36);
  });
});
