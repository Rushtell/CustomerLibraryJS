const Address = require('../src/Address.js');
const addressTypes = require('../src/AddressTypes.js');
const AddressValidator = require('../src/AddressValidator.js');

test('ShouldValidateAddressWithoutErrors', () => {
  address = new Address(
    '1',
    '2',
    'Billing',
    '3',
    '4',
    '5',
    'United States'
    );
  addressValidator = new AddressValidator();
  errors = addressValidator.validateAddress(address);
  expect(errors.length).toBe(0);
});

test('ShouldValidateAddressWith7Errors', () => {
  address = new Address(
    );
  addressValidator = new AddressValidator();
  errors = addressValidator.validateAddress(address);
  expect(errors.length).toBe(7);
});

test('ShouldValidateAddressWith2ErrorsInTypeAndCountry', () => {
  address = new Address(
    '1',
    '2',
    'Bill',
    '3',
    '4',
    '5',
    'Russia'
    );
  addressValidator = new AddressValidator();
  errors = addressValidator.validateAddress(address);
  expect(errors.length).toBe(2);
});