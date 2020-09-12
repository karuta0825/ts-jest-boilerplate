import * as assert from 'power-assert';
import double from '../../../src/mock/export-default/double';
import doubleSquare from '../../../src/mock/export-default/doubleSquare';

describe('spy export default with spyOn', () => {
  let spy: jest.SpyInstance;
  beforeEach(() => {
    const original = require('../../../src/mock/export-default/double');
    spy = jest.spyOn(original, 'default');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('呼び出されるのは1回', () => {
    const actual = double(3);
    assert.equal(spy.mock.calls.length, 1);
  });

  it('引数は、3である', () => {
    const actual = double(3);
    assert.equal(spy.mock.calls[0], 3);
  });

  it('処理は正常終了し、例外をなげない', () => {
    const actual = double(3);
    assert.equal(spy.mock.results[0].type, 'return');
  });

  it('return値は6である', () => {
    const actual = double(3);
    assert.equal(spy.mock.results[0].value, 6);
  });

  it('doubleSquareの戻り値は、(2 * 3) ^ 2 で36になる', () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 36);
  });
});

describe('spy and stub export default', () => {
  let spy: jest.SpyInstance;
  beforeEach(() => {
    const original = require('../../../src/mock/export-default/double');

    // mockReturnValueで返り値を変更する
    spy = jest.spyOn(original, 'default').mockReturnValue(1);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('呼び出されるのは1回', () => {
    const actual = double(3);
    assert.equal(spy.mock.calls.length, 1);
  });

  it('引数は、3である', () => {
    const actual = double(3);
    assert.equal(spy.mock.calls[0], 3);
  });

  it('処理は正常終了し、例外をなげない', () => {
    const actual = double(3);
    assert.equal(spy.mock.results[0].type, 'return');
  });

  it('return値は3である', () => {
    const actual = double(3);
    assert.equal(spy.mock.results[0].value, 1);
  });

  it('doubleSquareの戻り値は、1 ^ 2 で1になる', () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 1);
  });
});
