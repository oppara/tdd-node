'use strict';

import assert from 'power-assert';
import Dollar from '../src/dollar';

describe('Money', () => {
  it('test multiplication', () => {
    const five = new Dollar(5);

    let product = five.times(2);
    assert.equal(10, product.amount);

    product = five.times(3);
    assert.equal(15, product.amount);
  });

  it('test equality', () => {
    assert.strictEqual(new Dollar(5).equals(new Dollar(5)), true);
    assert.strictEqual(new Dollar(5).equals(new Dollar(6)), false);
  });
});
