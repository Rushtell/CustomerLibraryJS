const Customer = require('../src/Customer.js');

test('it should create customer', () => {

  const purchaseDate = Date.now();

  const customer = new Customer(
    'Vlad',
    'Maslov',
    '1',
    '+123123123',
    'test@gmail.com',
    ['note1', 'note2'],
    200.20,
    purchaseDate
  );

  expect(customer.firstName).toBe('Vlad');
  expect(customer.lastName).toBe('Maslov');
  expect(customer.phoneNumber).toBe('+123123123');
  expect(customer.email).toBe('test@gmail.com');
  expect(customer.totalPurchasesAmount).toBe(200.20);
  expect(customer.lastPurchaseDate).toBe(purchaseDate);

  expect(customer.notes[0]).toBe('note1');
  expect(customer.notes[1]).toBe('note2');
});
