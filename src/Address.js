module.exports = class Address {
    constructor(addressLine, addressLine2, addressType, city, postalCode, state, country) {

      this.addressLine = addressLine;

      this.addressLine2 = addressLine2;

      this.addressType = addressType;

      this.city = city;

      this.postalCode = postalCode;

      this.state = state;
      
      this.country = country;
    }
}