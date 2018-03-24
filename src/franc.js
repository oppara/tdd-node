'use strict';

export default class Franc {

  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }

  equals(obj) {
    return this.amount === obj.amount;
  }
}
