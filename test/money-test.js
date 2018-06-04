'use strict';

import assert from 'power-assert';
import { Money } from '../src/money';

describe('Money', () => {
  it('test multiplication', () => {
    const five = Money.dollar(5);
    assert.equal(JSON.stringify(Money.dollar(10)), JSON.stringify(five.times(2)));
    assert.equal(JSON.stringify(Money.dollar(15)), JSON.stringify(five.times(3)));
  });

  it('test equality', () => {
    assert.strictEqual(Money.dollar(5).equals(Money.dollar(5)), true);
    assert.strictEqual(Money.dollar(5).equals(Money.dollar(6)), false);
    assert.strictEqual(Money.franc(5).equals(Money.dollar(5)), false);
  });

  it('test currency', () => {
    assert.equal('USD', Money.dollar(1).currency());
    assert.equal('CHF', Money.franc(1).currency());
  });
});
