const Person = require('./Person.js');

module.exports =  class Customer extends Person {
  constructor(firstName, lastName, address, phoneNumber, email, notes, totalPurchasesAmount, lastPurchaseDate) {
    super(firstName, lastName);

    this.address = address;

    this.phoneNumber = phoneNumber;

    this.email = email;

    this.notes = notes;

    this.totalPurchasesAmount = totalPurchasesAmount;

    this.lastPurchaseDate = lastPurchaseDate;
  }
}
