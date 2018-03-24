'use strict';

import assert from 'power-assert';
import Dollar from '../src/dollar';
import Franc from '../src/franc';

describe('Money', () => {
  it('test multiplication', () => {
    const five = new Dollar(5);
    assert.equal(JSON.stringify(new Dollar(10)), JSON.stringify(five.times(2)));
    assert.equal(JSON.stringify(new Dollar(15)), JSON.stringify(five.times(3)));
  });

  it('test equality', () => {
    assert.strictEqual(new Dollar(5).equals(new Dollar(5)), true);
    assert.strictEqual(new Dollar(5).equals(new Dollar(6)), false);
  });

  it('test Franc multiplication', () => {
    const five = new Franc(5);
    assert.equal(JSON.stringify(new Franc(10)), JSON.stringify(five.times(2)));
    assert.equal(JSON.stringify(new Franc(15)), JSON.stringify(five.times(3)));
  });
});
