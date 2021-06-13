const Customer = require('../src/Customer.js');
const Address = require('../src/Address.js');
const CustomerValidator = require('../src/CustomerValidator.js');

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
    customer = new Customer(
        '1',
        '2',
        address,
        '+7888888',
        'qwer@qwe.com',
        ['123', '321'],
        100.20,
        new Date(2020, 10, 10)
    );
    customerValidator = new CustomerValidator();
    errors = customerValidator.validateCustomer(customer);
    expect(errors.length).toBe(0);
  });