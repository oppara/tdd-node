'use strict';

import Money from '../src/money';

export default class Dollar extends Money {

  constructor(amount) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

}
