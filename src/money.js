'use strict';

class Money {

  constructor(amount, currency) {
    this.amount = amount;
    this._currency = currency;
  }

  equals(obj) {
    return this.amount === obj.amount
      && this.constructor === obj.constructor;
  }

  currency() {
    return this._currency;
  }

  static dollar(amount) {
    return new Dollar(amount, 'USD');
  }

  static franc(amount) {
    return new Franc(amount, 'CHF');
  }
}

class Dollar extends Money {
  times(multiplier) {
    return Money.dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  times(multiplier) {
    return Money.franc(this.amount * multiplier);
  }
}

export { Money };
