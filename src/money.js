'use strict';

class Money {

  equals(obj) {
    return this.amount === obj.amount
      && this.constructor === obj.constructor;
  }

  static dollar(amount) {
    return new Dollar(amount);
  }

  static franc(amount) {
    return new Franc(amount);
  }
}

class Dollar extends Money {

  constructor(amount) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money {

  constructor(amount) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}

export { Money };
