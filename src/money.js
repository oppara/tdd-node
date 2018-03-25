'use strict';

export default class Money {

  equals(obj) {
    return this.amount === obj.amount
      && this.constructor === obj.constructor;
  }
}

