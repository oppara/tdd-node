'use strict';

import assert from 'power-assert';
import { Money, Franc } from '../src/money';

describe('Money', () => {
  it('test multiplication', () => {
    const five = Money.dollar(5);
    assert.equal(JSON.stringify(Money.dollar(10)), JSON.stringify(five.times(2)));
    assert.equal(JSON.stringify(Money.dollar(15)), JSON.stringify(five.times(3)));
  });

  it('test equality', () => {
    assert.strictEqual(Money.dollar(5).equals(Money.dollar(5)), true);
    assert.strictEqual(Money.dollar(5).equals(Money.dollar(6)), false);
    assert.strictEqual(Money.franc(5).equals(Money.franc(5)), true);
    assert.strictEqual(Money.franc(5).equals(Money.franc(6)), false);
    assert.strictEqual(Money.franc(5).equals(Money.dollar(5)), false);
  });

  it('test Franc multiplication', () => {
    const five = Money.franc(5);
    assert.equal(JSON.stringify(Money.franc(10)), JSON.stringify(five.times(2)));
    assert.equal(JSON.stringify(Money.franc(15)), JSON.stringify(five.times(3)));
  });

  it('test currency', () => {
    assert.equal('USD', Money.dollar(1).currency());
    assert.equal('CHF', Money.franc(1).currency());
  });

  it('test different class equality', () => {
    assert.strictEqual(new Money(10, 'CHF').equals(new Franc(10, 'CHF')), true);
  });
});
