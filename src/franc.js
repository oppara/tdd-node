'use strict';

import Money from '../src/money';

export default class Franc extends Money {

  constructor(amount) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }

}
