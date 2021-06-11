const { test, expect } = require('@jest/globals');
const Address = require('../src/Address.js');

test('AddressShouldCreate', () => {
  address = new Address (
    '123',
    '321',
    'Billing',
    'Chelyabinsk',
    '123321',
    'Texas',
    'United States'
  );
  expect(address.addressLine).toBe('123');
  expect(address.addressLine2).toBe('321');
  expect(address.addressType).toBe('Billing');
  expect(address.city).toBe('Chelyabinsk');
  expect(address.postalCode).toBe('123321');
  expect(address.state).toBe('Texas');
  expect(address.country).toBe('United States');
});
