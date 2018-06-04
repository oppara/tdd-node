'use strict';

class Money {

  constructor(amount, currency) {
    this.amount = amount;
    this._currency = currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this._currency);
  }

  equals(obj) {
    return this.amount === obj.amount
      && this.currency() === obj.currency();
  }

  currency() {
    return this._currency;
  }

  static dollar(amount) {
    return new Money(amount, 'USD');
  }

  static franc(amount) {
    return new Money(amount, 'CHF');
  }
}

export { Money };
