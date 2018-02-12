'use strict';

import assert from 'power-assert';
import Dollar from '../src/dollar';

describe('Money', () => {
  it('test multiplication', () => {
    const five = new Dollar(5);
    five.times(2);
    assert.equal(10, five.amount);
  });
});
