import * as assert from 'power-assert';
import { double } from '../../../src/mock/export/double';
import doubleSquare from '../../../src/mock/export/doubleSquare';

describe('stub export function with jest.spyOn', () => {
  let spy: jest.SpyInstance;
  beforeAll(() => {
    const org = require('../../../src/mock/export/double');
    spy = jest.spyOn(org, 'double').mockReturnValue(2);
  });

  afterAll(() => {
    spy.mockRestore();
  });

  it('戻り値は4になる。', () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 4);
  });
});
