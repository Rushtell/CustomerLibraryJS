const Address = require('../src/Address.js');
const AddressValidator = require('../src/AddressValidator.js');

test('testt', () => {
    address = new Address("1");
    addressValidator= new AddressValidator();
    error = addressValidator.validateAddress(address);
    expect(error).toBe('test');
  });