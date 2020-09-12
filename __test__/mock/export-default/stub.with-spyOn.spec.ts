import * as assert from 'power-assert';
import double from '../../../src/mock/export-default/double';
import doubleSquare from '../../../src/mock/export-default/doubleSquare';

describe('stub export default function with jest.spyOn', () => {
  let spy: jest.SpyInstance;
  beforeAll(() => {
    const org = require('../../../src/mock/export-default/double');
    // spyOn()で返却されるインスタンスにmockReturnValueを使ってスタブにする
    spy = jest.spyOn(org, 'default').mockReturnValue(2);
  });

  afterAll(() => {
    spy.mockRestore();
  });

  it('戻り値は4になる。', () => {
    const actual = doubleSquare(3);
    assert.equal(actual, 4);
  });
});
